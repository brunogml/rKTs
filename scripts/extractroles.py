#!/usr/bin/env python3

import csv
from xml.etree.ElementTree import ElementTree
import sys

roles = ["author", "translatorPandita", "translator", "sponsor", "scribe", "translator2Pandita", "translator2", "revisorPandita", "revisor", "revisionsponsor", "revisor2Pandita", "revisor2", "revisor3Pandita", "revisor3", "translationplace", "revisionplace"]
trroles = ["translatorPandita", "translator", "translator2Pandita", "translator2", "translationplace"]

def get_info_tan(fname, res={}, isKangyur=False):
    doc = ElementTree()
    doc.parse(fname)
    outline = doc.getroot()
    for item in outline.findall('item'):
        rktst = item.find('rkts'+('' if isKangyur else 't')).text
        if rktst is None:
            continue
        title = item.find('tib').text
        ref = item.find('ref').text
        res[ref] = {"rkts": ('K' if isKangyur else 'T')+rktst, "title": title}
        for p in roles:
            for v in item.findall(p):
                if p not in res[ref]:
                    res[ref][p] = []
                thisres = [v.text]
                rid = v.find('rid')
                if rid is not None:
                    thisres.append(rid.text[4:])
                res[ref][p].append(thisres)
    return res

mappingcsv = {
    "ma": "author",
    "pa": "translatorPandita",
    "tr": "translator"
}

def getcsv(fname):
    res = {}
    with open(fname, newline='') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            rkts = row[0]
            role = row[1]
            if role not in mappingcsv:
                continue
            if rkts not in res:
                res[rkts] = {}
            if mappingcsv[role] not in res[rkts]:
                res[rkts][mappingcsv[role]] = []
            res[rkts][mappingcsv[role]].append(row[2])
    return res

def main():
    infos = get_info_tan("../catalogs/23703.xml")
    #infos = get_info_tan("../catalogs/1KG13126.xml")
    csvs = getcsv("../../rkts-actors.csv")
    orderedrefs = sorted(infos.keys())
    rows = []
    for ref in orderedrefs:
        csvinfo = {}
        info = infos[ref]
        rkts = info["rkts"]
        title = info["title"]
        if rkts in csvs:
            csvinfo = csvs[rkts]
        stop = False
        for p in trroles:
            if p in info:
                stop = True
        if stop:
            continue
        for p, vlist in info.items():
            if p in ["rkts", "title"] or p in trroles:
                continue
            csvv = ""
            if p in csvinfo:
                csvv = ','.join(csvinfo[p])
                if len(vlist) > 1 or len(csvinfo[p]) > 1:
                    #csvv += "?"
                    csvv = ""
            for v in vlist:
                row = [ref, title, p, v[0], v[1] if len(v) > 1 else "", csvv]
                #if csvv:
                    #row = [csvv, v[0]]
                rows.append(row)
    with open('t-nontranslated.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, quoting=csv.QUOTE_MINIMAL)
        for row in rows:
            writer.writerow(row)

            
main()

# SPARQL query:

# select ?p (max(?nametib) as ?nt) (max(?namesa) as ?ns) (max(?birthonyear) as ?boy) (max(?birthnotbefore) as ?bnb) (max(?birthnotafter) as ?bna) (max(?deathonyear) as ?doy) {
# {
#     ?mwp :partOf+ bdr:MW23703 ;
#          :instanceOf/:workHasParallelsIn? ?wa .
#     ?wa :creator/:agent ?p .
#     FILTER(NOT EXISTS {?p :personEvent ?e})
#     ?p skos:prefLabel ?pl .
#     FILTER(lang(?pl) = "bo-x-ewts" || lang(?pl) = "sa-x-ndia" || lang(?pl) = "sa-x-iast")
#     BIND (IF(lang(?pl) = "bo-x-ewts", ?pl, "") as ?nametib)
#     BIND (IF(lang(?pl) = "sa-x-ndia" || lang(?pl) = "sa-x-iast", ?pl, "") as ?namesa)
# } union {
#     ?mwp :partOf+ bdr:MW23703 ;
#          :instanceOf/:workHasParallelsIn? ?wa .
#     ?wa :creator/:agent ?p .
#     ?p :personEvent ?e .
#     ?e a ?et .
#     ?e ?ep ?eo .
#     BIND (IF(?et = bdo:PersonBirth && ?ep = bdo:onYear, ?eo, "") as ?birthonyear)
#     BIND (IF(?et = bdo:PersonBirth && ?ep = bdo:notBefore, ?eo, "") as ?birthnotbefore)
#     BIND (IF(?et = bdo:PersonBirth && ?ep = bdo:notAfter, ?eo, "") as ?birthnotafter)
#     BIND (IF(?et = bdo:PersonDeath && ?ep = bdo:onYear, ?eo, "") as ?deathonyear)
#     ?p skos:prefLabel ?pl .
#     FILTER(lang(?pl) = "bo-x-ewts" || lang(?pl) = "sa-x-ndia" || lang(?pl) = "sa-x-iast")
#     BIND (IF(lang(?pl) = "bo-x-ewts", ?pl, "") as ?nametib)
#     BIND (IF(lang(?pl) = "sa-x-ndia" || lang(?pl) = "sa-x-iast", ?pl, "") as ?namesa)
# }
# } group by ?p