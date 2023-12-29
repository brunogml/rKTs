xml_files=$(find . -type f -name "*.xml")

for file in $xml_files; do
    echo "Formatting $file..."
    xmllint --format "$file" | sponge "$file"
done
