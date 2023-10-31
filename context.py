import requests
import wikipediaapi
from difflib import SequenceMatcher

# Set a custom user agent for your application
headers = {'User-Agent': 'YourAppName/1.0 (sohampkul@gmail.com)'}

# Initialize the Wikipedia API
wiki_wiki = wikipediaapi.Wikipedia("en", headers=headers)
# Input message
user_message = input("Enter a message: ")

# Search Wikipedia for the input message
page = wiki_wiki.page(user_message)

# Check if a valid Wikipedia page is found
if page.exists():
    print("Wikipedia page found. The input message appears to be related to a Wikipedia topic.")
    print("Suggested Wikipedia article title:", page.title)
else:
    # If no valid Wikipedia page is found, suggest possible corrections
    suggested_titles = []
    for title in wikipediaapi.search(user_message):
        similarity = SequenceMatcher(None, user_message, title).ratio()
        suggested_titles.append((title, similarity))

    # Sort suggestions by similarity
    suggested_titles.sort(key=lambda x: x[1], reverse=True)

    if suggested_titles:
        print("No direct Wikipedia page found, but here are some related suggestions:")
        for suggestion, similarity in suggested_titles:
            print(f"{suggestion} (Similarity: {similarity:.2f})")
    else:
        print("No related Wikipedia articles found.")

# Note: This is a basic example and does not perform detailed fact-checking or correction.
