#!/usr/bin/env python3

import csv
from xml.etree.ElementTree import ElementTree
import xml.etree.ElementTree as ET
import sys

def doc_for_letter(letter):
    filename='../Tanjur/tanjur'+letter+'.xml'
    doc = ElementTree()
    doc.parse(filename)
    return doc

def no_slash(inputstr):
    if '/' in inputstr:
        idx = inputstr.index('/')
        return inputstr[:idx]
    return inputstr

def get_all_csv_corrs():
    res = {}
    with open('Tengyur-corr.csv', newline='') as csvfile:
        reader = csv.reader(csvfile)
        linenum = 0
        for row in reader:
            linenum += 1
            if linenum == 1:
                continue
            if len(row) < 3:
                continue
            nar = no_slash("N"+row[0])
            peq = no_slash("Q"+row[1])
            der = no_slash("D"+row[2])
            con = no_slash("C"+row[3])
            res[der] = {"n": nar, "q": peq, "c": con}
            #res['q'+peq] = {"n": nar, "d": der, "c": con}
    return res

def get_corr_tan(letter, res={}, rev=None):
    filename='../Tanjur/tanjur'+letter+'.xml'
    doc = ElementTree()
    doc.parse(filename)
    outline = doc.getroot()
    for item in outline.findall('item'):
        rktst = item.find('rktst').text
        ref = item.find('ref').text
        if rktst not in res:
            res[rktst] = {}
        if letter not in res[rktst]:
            res[rktst][letter] = []
        res[rktst][letter].append(ref)
        if rev is not None:
            rev[ref] = rktst
    return res

def check_all_corrs(csvcorrs, rktstoref, dtorkts):
    for der in dtorkts:
        if der not in csvcorrs:
            continue
        rkts = dtorkts[der]
        for letter in "nq":
            if rkts not in rktstoref or letter not in rktstoref[rkts]:
                # if the outlines were really complete we could output an error here
                continue
            refsinxml = rktstoref[rkts][letter]
            refincsv = csvcorrs[der][letter]
            if '-' in refincsv or len(refincsv) == 1:
                continue
            if refincsv not in refsinxml:
                print("correspondence problem: ", der, " is supposed to match with ", refincsv, " but matches with ", refsinxml)

dtorkts = {}
rktstoref = {}
get_corr_tan("d", rktstoref, dtorkts)
get_corr_tan("n", rktstoref)
get_corr_tan("q", rktstoref)
csvcorrs = get_all_csv_corrs()

check_all_corrs(csvcorrs, rktstoref, dtorkts)
