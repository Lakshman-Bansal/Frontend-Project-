import os
import re
import urllib.parse

directory = r"c:\Users\LAKSHMAN BANSAL\OneDrive - CHITKARA UNIVERSITY\Semester - 2\Frontend project\Frontend project original"

style_regex = re.compile(r'[ \t]*<style[^>]*>.*?</style>[ \t]*\n?', re.DOTALL | re.IGNORECASE)
script_regex = re.compile(r'[ \t]*<script(?![^>]*src=)[^>]*>.*?</script>[ \t]*\n?', re.DOTALL | re.IGNORECASE)

# Extractors to just get content
style_content_regex = re.compile(r'<style[^>]*>(.*?)</style>', re.DOTALL | re.IGNORECASE)
script_content_regex = re.compile(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', re.DOTALL | re.IGNORECASE)

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        basename = os.path.splitext(filename)[0]
        css_filename = basename + ".css"
        js_filename = basename + ".js"
        
        css_filepath = os.path.join(directory, css_filename)
        js_filepath = os.path.join(directory, js_filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        styles = style_content_regex.findall(content)
        scripts = script_content_regex.findall(content)
        
        if styles:
            with open(css_filepath, 'w', encoding='utf-8') as f:
                f.write("\n".join(styles))
            
            link_tag = f'<link rel="stylesheet" href="{urllib.parse.quote(css_filename)}" />\n'
            
            def style_repl(match):
                if not hasattr(style_repl, "done"):
                    style_repl.done = True
                    # Try to preserve some indentation by checking what the matched string starts with
                    m_str = match.group(0)
                    indent = m_str[:len(m_str)-len(m_str.lstrip(' \t'))]
                    return indent + link_tag
                return ""
                
            content = style_regex.sub(style_repl, content)
            
        if scripts:
            actual_scripts = [s for s in scripts if s.strip()]
            if actual_scripts:
                with open(js_filepath, 'w', encoding='utf-8') as f:
                    f.write("\n".join(actual_scripts))
                
                script_tag = f'<script src="{urllib.parse.quote(js_filename)}"></script>\n'
                
                def script_repl(match):
                    # Check if the matched script had content
                    inner_content = script_content_regex.search(match.group(0)).group(1)
                    if not inner_content.strip():
                        return match.group(0)
                        
                    if not hasattr(script_repl, "done"):
                        script_repl.done = True
                        m_str = match.group(0)
                        indent = m_str[:len(m_str)-len(m_str.lstrip(' \t'))]
                        return indent + script_tag
                    return ""
                    
                content = script_regex.sub(script_repl, content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"Processed {filename}")
