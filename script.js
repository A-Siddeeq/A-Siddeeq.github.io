 
   function sendMail() {
   emailjs
   .send("service_jm5mk3p","template_nfpquz8",{
    name: document.getElementById('name').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
    })
   .then(
    res=>{
        name: document.getElementById('name').value = '';
        subject: document.getElementById('subject').value = '';
        message: document.getElementById('message').value = '';
        console.log(res);
        alert('Message Sent Successfully')
    })
    .catch((err) => console.log(err));
}