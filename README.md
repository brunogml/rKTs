# rKTs


### File format

Some indications on the xml format:
- UTF8 with no BOM
- LF for new lines
- format with `cat rkts.xml | xmllint --format - | sed -e 's/^[ ]*//;s/<item>/\n<item>/' | sponge rkts.xml`


### License

The data is under the [CC0 License](https://creativecommons.org/publicdomain/zero/1.0/).
