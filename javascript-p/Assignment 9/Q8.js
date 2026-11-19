$(function(){
  let postNumber = 3;
  $("#add").on("click", function(){
    postNumber++;
    $("#posts").append('<article class="post"><h2>New Post ' + postNumber + '</h2><p>This is a newly added blog post.</p></article>');
  });
  $("#featured").on("click", function(){
    $("#posts").prepend('<article class="post"><h2>Featured: Welcome to Our Blog</h2><p>Our latest featured update.</p></article>');
  });
  $("#remove").on("click", function(){ $("#posts .post").last().remove(); });
  // Place tags before or after the post heading with before() and after().
  $("#posts").on("click", ".post h2", function(){
    if(!$(this).siblings(".tag").length){
      $(this).before('<span class="tag">BLOG POST</span>');
      $(this).after('<span class="tag"> • Updated</span>');
    }
  });
  // Highlight posts whose text contains selected keywords, including newly added posts.
  function highlightKeywords(){
    $(".post").each(function(){
      const text = $(this).text().toLowerCase();
      $(this).css("background", /(javascript|featured|study)/.test(text) ? "#fff7d6" : "");
    });
  }
  $("#posts").on("click", ".post", highlightKeywords);
  highlightKeywords();
});