$('#yt-search').on('keydown', function(event) {
  if (event.which === 13) {
    search_query(
      'https://www.youtube.com/results?search_query=',
      $(this).val())
  }
})

$('#gg-search').on('keydown', function(event) {
  if (event.which === 13) {
    search_query('https://www.google.com/search?q=', $(this).val())
  }
})

$('#ddg-search').on('keydown', function(event) {
  if (event.which === 13) {
    search_query('https://www.duckduckgo.com/?q=', $(this).val())
  }
})

const search_query = (base_url, query) => {
  document.location.href = base_url
    + encodeURIComponent(query)
}