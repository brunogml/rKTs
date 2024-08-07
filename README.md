# rKTs

These files are the database of the [resources for Kanjur and Tanjur studies project](https://www.istb.univie.ac.at/kanjur/rktsneu/sub/index.php) based in Vienna.

### Tags

#### Editions

The tags used in the xml files of the `Kanjur/`, `Tanjur/` and `Tantra/` folder are:

- `<rkts>` (resp. `rktst`, `rktsg`), indicating that the text is a manifestation / expression of a text in the Kernel. For instance `<rkts>1</rkts>` in `Kanjur/derge.xml` indicates that the text in the Derge edition is a manifestation of the text with ID `1` in the Kernel file
- `<ref>` indicates the reference number of the text in the edition. It is unique and prefixed by one or several letter corresponding to the sigla of the edition (see [list of siglas](https://www.istb.univie.ac.at/kanjur/rktsneu/sigla/)). When catalogs of the edition are available, they are used as the source of these reference numbers.
- `<loc>` indicates the location of the text in the edition. Its format varies a bit from file to file (TBD)
 (will be adapted to the following pattern 
   * `<loc>`
   * `<set>` set ID (ex: MW22084 for bka' 'gyur (sde dge par phud) = BDRC ID) 
   * `<vol>` volume name (ex: 'dul ba, ka)
   * `<voln>` volume number in the collection 
   * `<json>` json volume number (correspond to BDRC Volume number
   * `<psection>` section in the paginations-json which corresponds to the text
   * `<p>` begin-end (ex: 1b1-462a8)
   * `<margin>` margin text (`type="AlternativeVolumeName"`, `type="AdditionalPagination"`, `type="AbbreviatedTitle"`)
- `<tib>` is the Tibetan title indicated in the incipit of the text in the edition, transliterated in EWTS
- `<skttrans>` idem with the Sanskrit title
- `<zhtrans>` idem with the Chinese title
- `<bsktrans>` idem with the Burushaski title
- `<coloph>` is the entire colophon of the text in the edition, transliterated in EWTS
- `<coltitle>` is the title of the text as indicated in the colophon
- `<author>` is the name of the author as appearing in the colophon of the edition (can appear multiple times)
- `<translatorPandita>` idem with the source language scholar participating in the translation (can be from Indic or Chinese)
- `<translator>` idem with the Tibetan translator
- `<sponsor>` idem with the sponsor (yon bdag) of the first translation
- `<scribe>` idem with the scribe (yi ge ba) of the first translation
- `<translator2Pandita>` idem with the source language scholar of the second translation
- `<translator2>` idem with the Tibetan translator of the second translation
- `<revisorPandita>` idem with the source language scholar involved in the first revision
- `<revisor>` idem with the Tibetan scholar involved in the first revision
- `<revisionsponsor>` idem with the sponsor of the first revision
- `<revisor2Pandita>` idem for the second revision
- `<revisor2>` idem for the second revision
- `<revisor3Pandita>` idem for the third revision
- `<revisor3>` idem for the third revision
- `<translationplace>` the place where the translation occured according to the colophon of the edition
- `<revisionplace>` the place where the translation occured according to the colophon of the edition
- `<note>` a note, in English
- `<lang>` indicates the main language, the default `bo` is not indicated, other values can be `bo,sa` (for the bilingual texts) and `sa`
- `<InDerge>` for fragments indicates their location in the Derge Kanjur
#### Kernel

- `<rkts>` (resp. `rktst`, `rktsg`), Reference Number of the text
- `<StandardTibetan>` Standardized form of the Tibetan Title (with `<source>` for this standard)
- `<StandardSanskrit>` Standardized form of the Sanskrit Title (with `<source>` for this standard)
- `<StandardMongolian>` Standardized form of the Mongolian Title (with `<source>` for this standard)
- `<tib>` all variants of the Tibetan title as found in the various editions
- `<skt>` all variants of the Sanskrit title as found in the various editions
- `<mng>` all variants of the Mongolian title as found in the various editions
- `<cmp>` records relationships with other works, they can be of the following nature:
	* `parallel`: the text is parallel with a part of another text
	* `parallel-part`: a part of the text is parallel with a part of another text
	* `SameTitle`: the two texts have the same title
	* `SimilarTitle`: the two texts have similar titles
	* `translation-taisho`: the text is a translation from Chinese, we indicate the Taisho number of the Chinese text
	* `extract`: the text is an extract from another text
  * `SourceText`: source text of a commentary
  * `Commentary`: commentary of a text

### Policy choices

- in edition files, when a title in an edition ends with `bzhugs` or `bzhugs so`, it is omitted from the title
- in edition files, when a title contains `zhes bya ba` it is kept

### File format details

Some indications on the xml format:
- UTF8 with no BOM
- LF for new lines
- format with `cat rkts.xml | xmllint --format - | sed -e 's/^[ ]*//;s/<item>/\n<item>/' | sponge rkts.xml`

### License

The data is under the [CC0 License](https://creativecommons.org/publicdomain/zero/1.0/). If you use these files we ask you to provide a reference to this github repository and to the rKTs project.
