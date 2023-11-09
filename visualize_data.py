import json
import random
path = "../FIG-benchmark/distribution_shifts"
# data = [
#     {"words": ["apple", "fruit"], "category": "Category1", "subcategory": "Sub1"},
#     {"words": ["banana", "fruit"], "category": "Category1", "subcategory": "Sub1"},
#     {"words": ["spinach", "vegetable"], "category": "Category1", "subcategory": "Sub2"},
#     {"words": ["carrot", "vegetable"], "category": "Category1", "subcategory": "Sub2"},
#     {"words": ["mango", "fruit"], "category": "Category2", "subcategory": "Sub3"},
#     {"words": ["peach", "fruit"], "category": "Category2", "subcategory": "Sub3"},
#     {"words": ["cabbage", "vegetable"], "category": "Category2", "subcategory": "Sub4"},
#     {"words": ["broccoli", "vegetable"], "category": "Category2", "subcategory": "Sub4"},
# ]
def load_json(dir):
    with open(dir, 'r') as f:
        data = json.load(f)
    return data
import os

def clean_text(string):
    string = string.replace("_", " ")
    string = string.title()
    return string

data = []
dirs = [f"{path}/fig_e", f"{path}/fig_p"] 
category_names = ["AlignGen-E", "AlignGen-P"]
all_pairs = []
for category_name, dir in zip(category_names, dirs):
    files = os.listdir(dir)
    if "all.json" in files:
        files.remove("all.json")
    pairs = [load_json(os.path.join(dir, f))for f in files]
    for f, pair in zip(files, pairs):
        subcategory = clean_text(f.split(".")[0])
        for p in pair:
            data.append({"distributions": [p["source"], p["target"]], "category": category_name, "subcategory": subcategory})

colors = [
    '#267CB5',  # Blue
    '#CA4032',  # Red
    '#1E894B',  # Green
    '#936919',  # Yellow
    '#7F4697',  # Purple
    '#C97226',  # Orange
    '#17816C',  # Turquoise
    '#647273',  # Gray
    '#A33090',  # Pink
]
colors = colors + colors

brighter_colors = [
    '#EAF4FF',  # Brighter Blue
    '#FFF2E2',  # Brighter Red
    '#ECFFF4',  # Brighter Green
    '#FFFBE9',  # Brighter Yellow
    '#F9ECFF',  # Brighter Purple
    '#FFEFE0',  # Brighter Orange
    '#EBFFFB',  # Brighter Turquoise
    '#F6FEFF',  # Brighter Gray
    '#FFEAFC',  # Light pink
]
brighter_colors = brighter_colors + brighter_colors



# yellow is #FDFFB6

# Map subcategories to colors with darker headings
color_map = {subcat: (color, color_bright) for subcat, color, color_bright in zip(
    set(item['subcategory'] for item in data), colors, brighter_colors
)}
# Define a constant for adjusting text darkness (0% means completely dark, 100% means original color)
text_darkness_adjustment = 0  # You can adjust this value as needed


def get_tool_tip(distribution, left = False):
    def example(e):
        prompt = e["prompt"]
        prompt = prompt.replace("\n", "<br>")
        good_completion = [r for r in e["responses"] if e["responses"][r] == 1][0]
        bad_completion = [r for r in e["responses"] if e["responses"][r] == 0][0]
        html = "<div>"
        html += f"<h5 style='text-align:left;font-size:16px;margin:0;'>Example sampled from {distribution}:</h5>"
        html += f"<p style='font-size:14px;text-align:left;font-weight:normal'>{prompt}"
        html += f"<br><em>Preferred response: </em>"
        html += f"{good_completion}"
        html += f"<br><br><em>Worse response: </em>"
        html += f"{bad_completion}</p>"
        html += "</div>"
        return html
    
    sample = random.sample(load_json(f"{path}/../distributions/{distribution}/test.json"), 20)
    example_strings = [
        example(s) for s in sample
    ]
    id = random.randint(0, 10000)
    js = """
        <div class="tooltip DIRECTION">
        <p id="randomText{ID}"></p>
        </div>

    <script>
    // Get the element that triggers the tooltip display
    var triggerElements = document.querySelectorAll('.word-pair-background');

    // Add an event listener to each trigger element
    triggerElements.forEach(function (element) {
        element.addEventListener("mouseover", function () {
            var tooltip = document.querySelector('.tooltip');

            // Check if the tooltip is changing from display:none to display:block
            if (window.getComputedStyle(tooltip).getPropertyValue("display") === "none") {
                // Transition from none to block detected, call the function
                randomIndex = Math.floor(Math.random() * 5);
                console.log(randomIndex)
            }
            document.getElementById("randomText{ID}").innerHTML = textOptions{ID}[randomIndex];
        });
    });
    // Array of text options
    var textOptions{ID} = example_strings
    </script>
"""
    js = js.replace("DIRECTION", "left" if left else "right")
    js = js.replace("{ID}", str(id))
    js = js.replace("example_strings", str(example_strings))

    # def get_example(prompt, good_completion, bad_completion):
    #     html = "<div class=tooltip>"
    #     html += f"<h3>Prompt<h3>"
    #     html += f"<p>{prompt}<p>"
    #     html += f"<h3>Good Completion<h3>"
    #     html += f"<p>{good_completion}<p>"
    #     html += f"<p>Worse Completion<p>"
    #     html += f"<p>{bad_completion}<p>"
    #     html += "</div>"
    
    # content = [get_example(1,1,1), get_example(2,2,2), get_example(3,3,3)]
    return js
 
    # examples = []
    # for distribution in distributions:
    #     data = load_json(f"../distributions/{distribution}/test.json")

data = [
    {"words": ["apple", "fruit"], "category": "AlignGen-E", "subcategory": "Skill"},
    {"words": ["banana", "fruit"], "category": "AlignGen-E", "subcategory": "Quality"},
    {"words": ["spinach", "vegetable"], "category": "AlignGen-E", "subcategory": "Context"},
    {"words": ["carrot", "vegetable"], "category": "AlignGen-P", "subcategory": "Personas"},
    {"words": ["mango", "fruit"], "category": "AlignGen-P", "subcategory": "Spurious"},
]
def generate_html(data):
    # HTML template with CSS for styling
    html = """
    <html>
    <head>
        <style>
            p, h1, h2, h3, h4, h5, h6 {
                font-family: 'Roboto', sans-serif;
            }
            h2 {
                text-align: center;
            }
            h3 {
                font-size: 20px;
                font-weight: 500;
            }
            .category {
                width: 27vw;
            }
            .subcategory {
                text-align: center;
                color: white;
                margin-bottom: 5px;
                border-radius: 5px;
                background-color: %s; /* Set the text color to match the background color */
                padding-left: 5px;
                padding-right: 5px;
            }
            .word-pair {
                font-size: 18px;
                font-weight: 500;
                text-align: center;
                color: %s; /* Set the text color to match the background color */
                /* filter: brightness(50%); /* Adjust the brightness of the text */
                font-family: 'Roboto', sans-serif;
            }
            .arrow {
                border: 0px solid black;
                font-size: 20px;
                font-weight: 500;
                text-align: center;
                color: %s; /* Set the text color to match the background color */
                /* filter: brightness(50%); /* Adjust the brightness of the text */
                font-family: 'Roboto', sans-serif;
            }
            .word-pair-background {
                background-color: %s;
                border-radius: 5px;
                /* filter: brightness(250%); /* Adjust the brightness of the text */
                cursor: pointer;
                padding-top: 15px;
                padding-bottom: 15px;
                margin-top: 5px;
                margin-bottom: 5px;
                position: relative;
                display: inline-block;
                width: 100%;

            }
            .subcategory-background {
                background-color: %s;
                border-radius: 5px;
                /* filter: brightness(250%); /* Adjust the brightness of the text */
                cursor: pointer;
                padding-top: 15px;
                padding-bottom: 15px;
                width: 100%;
                align-items: center;
            }
            .subcategory-heading {
                color: %s;
                /* filter: brightness(100%); /* Adjust the brightness of the text */
                border-bottom: 6px solid #000;
                margin-left: 5px;
                margin-right: 5px;
                margin-bottom: 15px;
            }
            .container {
                display: flex; /* Arrange elements horizontally */
                justify-content: center;
            }
            .tooltip {
                display: none;
                position: absolute;
                background-color: #fff;
                color: #000;
                border-radius: 10px;
                padding: 25px;
                width: 33vw;
                height: auto;
                border-radius: 5px;
                z-index: 1;
                /* right: -33vw; /* Adjust this value for vertical position */
                transform: translateY(-50%);
            }

            .left {
                left: -33vw; /* Adjust this value for vertical position */
            }
            .right {
                right: -33vw; /* Adjust this value for vertical position */
            }
            .word-pair:hover {
                font-weight: bold;
            }
            .word-pair:hover .tooltip {
                display: block;
            }
            body {
                padding-top: 20vh;
                padding-bottom: 20vh;
            }
        </style>
    </head>
    <body>
    """

    category = "AlignGen-E"
    first_column = [item for item in data if item['category'] == category and item['subcategory'] in ["Skill", "Quality", "Encoding"]]
    second_column = [item for item in data if item['category'] == category and item['subcategory'] in ["Pretraining Similarity", "Difficulty", "Context"]]
    html+= "<div class='container'>"
    html += "<div><div class=subcategory-heading><h2>AlignGen-E</h2></div>"
    html+= "<div class='container'>"
    for column in [first_column, second_column]:
        html += f'<div class="category">'
        subcategories = set(item['subcategory'] for item in column)
        
        for subcategory in subcategories:
            color, color_bright = color_map[subcategory]
            html += f'<div class="subcategory">' 
            html += f'<div class="subcategory-background" style="background-color: {color}"><div class="arrow" style="color: white">{subcategory}</div></div>'
            subcategory_data = [item for item in column if item['subcategory'] == subcategory]
            
            # tool_tip = "<div class=tooltip>NOICE</div>"
            for item in subcategory_data:
                tool_tip_source = get_tool_tip(item["distributions"][0])
                tool_tip_target = get_tool_tip(item["distributions"][1])
                html += f'<div class="word-pair-background" style="background-color: {color_bright}">'
                html += f'<span class="word-pair" style="color: {color}">{tool_tip_source}{item["distributions"][0]}</span>'
                html += f'<span class="arrow" style="color: {color}"> --> </span>'
                html += f'<span class="word-pair" style="color: {color}">{tool_tip_target}{item["distributions"][1]}</span>'
                html += f'</div>'
            html += '</div>'
        html += '</div>'
    html += f'</div>'
    html += '</div>'

    category = "AlignGen-P"
    html += f'<div class="category"><div class=subcategory-heading><h2>{category}</h2></div>'
    column = [item for item in data if item['category'] == category]
    subcategories = set(item['subcategory'] for item in column)
    
    for subcategory in subcategories:
        color, color_bright = color_map[subcategory]
        html += f'<div class="subcategory">' 
        html += f'<div class="subcategory-background" style="background-color: {color}"><div class="arrow" style="color: white">{subcategory}</div></div>'
        subcategory_data = [item for item in column if item['subcategory'] == subcategory]
        
        # tool_tip = "<div class=tooltip>NOICE</div>"
        for item in subcategory_data:
            tool_tip_source = get_tool_tip(item["distributions"][0], left = True)
            tool_tip_target = get_tool_tip(item["distributions"][1], left = True)
            html += f'<div class="word-pair-background" style="background-color: {color_bright}">'
            html += f'<span class="word-pair" style="color: {color}">{tool_tip_source}{item["distributions"][0]}</span>'
            html += f'<span class="arrow" style="color: {color}"> --> </span>'
            html += f'<span class="word-pair" style="color: {color}">{tool_tip_target}{item["distributions"][1]}</span>'
            html += f'</div>'
        html += '</div>'
    html += f'</div>'
    html += '</div>'
    html += """
    </body>
    </html>
    """

    return html

# Generate the HTML content
html_content = generate_html(data)

# Save to an HTML file and open in a browser (e.g., using the webbrowser module)
with open('index.html', 'w') as f:
    f.write(html_content)

# import webbrowser
# webbrowser.open('index.html', new=2)  # new=2 opens in a new tab

