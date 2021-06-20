var text_full=document.getElementById("login").textContent
matches = text_full.match(/\d+/g);
if(text_full.search("add")!=-1)
{
    document.getElementById("valuepkg3").value=parseInt(matches[0])+parseInt(matches[1])
}
else if(text_full.search("subtract")!=-1)
{
    document.getElementById("valuepkg3").value=parseInt(matches[0])-parseInt(matches[1])
}
else if(text_full.search("first")!=-1)
{
    document.getElementById("valuepkg3").value=matches[0]
}
else if(text_full.search("second")!=-1)
{
    document.getElementById("valuepkg3").value=matches[1]
}


