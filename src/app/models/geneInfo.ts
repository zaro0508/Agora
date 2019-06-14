import { Document } from 'mongoose';

export interface GoMF {
    category: string;
    MF?: string;
    evidence: string;
    id: string;
    pubmed: number[] | any;
    term: string;
}

export interface GeneInfo {
    _id: string;
    ensembl_gene_id: string;
    alias?: string[];
    druggability?: Druggability[];
    name: string;
    summary?: string;
    hgnc_symbol: string;
    type_of_gene: string;
    'go.MF': GoMF[];
    isIGAP: boolean;
    haseqtl: boolean;
    isChangedInADBrain: boolean;
    medianexpression: MedianExpression[];
    nominatedtarget: NominatedTarget[];
    nominations: number;
    // Extra field for the genes list table. This will be
    // all the teams in a single string separated by commas
    teams?: string;
    study?: string;
    input_data?: string;
}

export interface MedianExpression {
    medianlogcpm: number;
    tissue: string;
}

export interface NominatedTarget {
    team: string;
    rank: number;
    target_choice_justification: string;
    predicted_therapeutic_direction: string;
    data_used_to_support_target_selection: string;
    data_synapseid: string[];
    study: string;
    input_data: string;
}

export interface Druggability {
    sm_druggability_bucket: number;
    classification: string;
    druggable_class: string;
    pharos_class: string;
}

export type GeneInfoDocument = GeneInfo & Document;
