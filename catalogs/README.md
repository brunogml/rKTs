# Catalogs

These catalogs of the collections in xml files

### The tags used in the xml files are:

- `<rkts>` (resp. `rktst`, `rktsg`), indicating that the text is a manifestation / expression of a text in the Kernel. For instance `<rkts>1</rkts>` in `Kanjur/derge.xml` indicates that the text in the Derge edition is a manifestation of the text with ID `1` in the Kernel file
- `<ref>` indicates the reference number of the text in the edition. It is unique and prefixed by one or several letter corresponding to the sigla of the edition (see [list of siglas](https://www.istb.univie.ac.at/kanjur/rktsneu/sigla/)). When catalogs of the edition are available, they are used as the source of these reference numbers.
- `<loc>` indicates the location of the text in the edition. Its format varies a bit from file to file (TBD)
 (will be adapted to the following pattern 
   * `<loc>`
   * `<vol>` volume name (ex:'dul ba, ka)
   * `<voln>` volume number in the collection 
   * `<json>` json volume number (correspond to BDRC Volume number
   * `<psection>` section in the json which corresponds to the text
   * `<p>` begin-end (ex: 1b1-462a8)
- `<tib>` is the Tibetan title indicated in the incipit of the text in the edition, transliterated in EWTS
- `<skttrans>` idem with the Sanskrit title
- `<zhtrans>` idem with the Chinese title
- `<bsktrans>` idem with the Burushaski title
- `<coloph>` is the entire colophon of the text in the edition, transliterated in EWTS
- `<coltitle>` is the title of the text as indicated in the colophon
- `<author>` is the name of the author as appearing in the colophon of the edition (can appear multiple times)
- `<translator-pandita>` idem with the source language scholar participating in the translation (can be from Indic or Chinese)
- `<translator>` idem with the Tibetan translator
- `<sponsor>` idem with the sponsor (yon bdag) of the first translation
- `<scribe>` idem with the scribe (yi ge ba) of the first translation
- `<translator2-pandita>` idem with the source language scholar of the second translation
- `<translator2>` idem with the Tibetan translator of the second translation
- `<revisor-pandita>` idem with the source language scholar involved in the first revision
- `<revisor>` idem with the Tibetan scholar involved in the first revision
- `<revisionsponsor>` idem with the sponsor of the first revision
- `<revisor2-pandita>` idem for the second revision
- `<revisor2>` idem for the second revision
- `<revisor3-pandita>` idem for the third revision
- `<revisor3>` idem for the third revision
- `<translationplace>` the place where the translation occured according to the colophon of the edition
- `<revisionplace>` the place where the translation occured according to the colophon of the edition
- `<note>` a note, in English
- `<lang>` indicates the main language, the default `bo` is not indicated, other values can be `bo,sa` (for the bilingual texts) and `sa`
