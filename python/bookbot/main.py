def count_characters_frequency(text):
    text = text.lower()
    char_frequency = {}
    for char in text:
        if char.isalpha():
            char_frequency[char] = char_frequency.get(char, 0) + 1
    return char_frequency

def get_num_words(text):
    words = text.split()
    return len(words)

def get_book_text(path):
    with open(path) as f:
        file_contents = f.read()
        return file_contents

book_path = "books/frankenstein.txt"
book_contents = get_book_text(book_path)

word_count = get_num_words(book_contents)
character_counts = count_characters_frequency(book_contents)

print(f"{word_count} words was found in the document")
print(f"--- Begin report of {book_path} ---")
for char, count in sorted(character_counts.items()):
    print(f"The '{char}' character appears {count} times")
print("--- End report ---")
