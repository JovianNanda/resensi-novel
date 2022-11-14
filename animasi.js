const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('terlihat');
        }else{
            entry.target.classList.remove('terlihat');
           
        }
    });
});

const elemenTersembunyi = document.querySelectorAll(".tersembunyi");
elemenTersembunyi.forEach((element) => observer.observe(element));
