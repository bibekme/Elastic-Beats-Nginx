
Use the following curl command to delete the docs from the nginx index

``` curl

curl -X POST "http://localhost:9200/nginx/_delete_by_query" -H 'Content-Type: application/json' -d'
{
  "query": {
    "match_all": {}
  }
}'
```
