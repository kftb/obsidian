---
categories:
  - "[[Books]]"
author: "[[{{authors}}]]"
tags:
  - books
  - references
  - zotero
  - 🌱
---

## Raw annotations

{% persist "annotations" %}
{% set newAnnotations = annotations | filterby("date", "dateafter", lastImportDate) %}
{% if newAnnotations.length > 0 %}

### Imported: {{importDate | format("YYYY-MM-DD h:mm a")}}

{% for annotation in newAnnotations %}
{{annotation.annotatedText}} ([Page {{annotation.page}}](zotero://open-pdf/library/items/{{annotation.attachment.itemKey}}?page={{annotation.page}}&annotation={{annotation.id}}))
{%- if annotation.imageRelativePath -%}
![[{{annotation.imageRelativePath}}]] {%- endif %} 
{% endfor %}

{% endif %}
{% endpersist %}