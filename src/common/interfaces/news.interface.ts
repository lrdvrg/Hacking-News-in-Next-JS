export interface News {
    _highlightResult: HighlightResult;
    _tags:            string[];
    author:           string;
    comment_text:     string;
    created_at:       string;
    created_at_i:     number;
    objectID:         string;
    parent_id:        number;
    story_id:         number;
    story_title:      string;
    story_url:        string;
    updated_at:       Date;
}

export interface HighlightResult {
    author:       Author;
    comment_text: Author;
    story_title:  Author;
    story_url:    Author;
}

export interface Author {
    matchLevel:        string;
    matchedWords:      string[];
    value:             string;
    fullyHighlighted?: boolean;
}

export interface NewsApiResponse {
    hits: News[];
}