
const element = document.getElementById("description");
const comments = document.getElementsByClassName("comment-class");
const myForm = document.getElementById('my-form');

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting normally
    const formData = new FormData(myForm);
    const plantId = formData.get('plantId');
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        comment:formData.get('comment')
      };
      const params = new URLSearchParams();
        for (const key in data) 
        {
            params.append(key, data[key]);
        }
      console.log(data);
      console.log(plantId);
    fetch(`/comment/create?plantId=${plantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
      })
    .then(response => response.json())
    .then(data =>     window.location.reload())
    .catch(error => console.log(error));
   
  });
const data = element.textContent;
const translator = async (content) => {
    let text;
    console.log(element.className);
    if(element.className == "Yoruba")
    {
        text = await translate(content , {to : "yo"});
        element.textContent = text;
    }
    else if(element.className == "Igbo")
    {
        text = await translate(content , {to : "ig"});
        element.textContent = text;
    }
    else if(element.className == "Hausa")
    {
        text = await translate(content , {to : "ha"});
        element.textContent = text;
    }
    
}
const translateComments = async (comments , language) => 
{
    let lang;
    if(language == "Igbo")
    {
        lang = "ig";
    }
    else if(language == "Yoruba")
    {
        lang = "yo";
    }
    else if(language == "Hausa")
    {
        lang =  "ha";
    }
    if(lang != null)
    {
        comments.forEach(async arr => {
        
            arr.textContent = await translate(arr.textContent , {to : lang});
        });
    }
    else
    {
        comments.forEach(async arr => {
        
            arr.textContent = await translate(arr.textContent , {to : lang});
        });
    }
    
}
translator(data);
console.log(Array.from(comments))
translateComments(Array.from(comments) , element.className)
