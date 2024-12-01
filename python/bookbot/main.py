def count_characters_frequency(text):
    text = text.lower()
    char_frequency = {}


    for char in text:
        if char != ' ':
            char_frequency[char] = char_frequency.get(char, 0) + 1
    return char_frequency

book = "books/frankenstein.txt"
with open(book) as f:
    file_contents = f.read()

character_counts = count_characters_frequency(file_contents)

print(f"--- Begin report of {book} ---")
for char, count in sorted(character_counts.items()):
    print(f"The '{char}' character appears {count} times")

print("--- End report ---")
