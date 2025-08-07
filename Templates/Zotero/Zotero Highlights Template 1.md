---
categories:
  - "[[Books]]"
author: 
cover: 
genre: 
series: 
pages: 
isbn: 
isbn13: 
year: 
rating: 
topics: 
start: 
end: 
created:
  "{ date }": 
last: 
via: ""
tags:
  - books
  - references
  - to-read
---
{% persist "notes" %}{% if isFirstImport %}
##

{% persist "notes" %}{% if isFirstImport %}
{% for annotation in annotations -%} 
    {%- if annotation.annotatedText -%} 
    > {{annotation.annotatedText}} ([Page {{annotation.page}}](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}}))
    {%- endif %} 
    {%- if annotation.imageRelativePath -%}
    ![[{{annotation.imageRelativePath}}]] {%- endif %} 
{% if annotation.comment %} 
{{annotation.comment}} 
{% endif %} 
{% if annotation.allTags %} 
{{annotation.allTags}}
{% endif %} 
{% endfor -%}
{% endif %}
{% endpersist %}

## Raw annotations 

{% for annotation in annotations -%} 
    {%- if annotation.annotatedText -%} 
    > {{annotation.annotatedText}} ([Page {{annotation.page}}](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}}))
    {%- endif %} 
    {%- if annotation.imageRelativePath -%}
    ![[{{annotation.imageRelativePath}}]] {%- endif %} 
{% if annotation.comment %} 
{{annotation.comment}} 
{% endif %} 
{% if annotation.allTags %} 
{{annotation.allTags}}
{% endif %} 
{% endfor -%}