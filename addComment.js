// step 1 :add even listiner to the post button.
document.getElementById('button-post').addEventListener('click',function () {
    // get the comment insdie the text area
    const newComment=document.getElementById('new-comment');
    const newCommentText=newComment.value;
    // step 3 : set the comment inside the comment container
    const commentContainer=document.getElementById('comment-container');
    const p=document.createElement('p');
    p.innerText=newCommentText;
    commentContainer.appendChild(p);
    newComment.value='';
    
})