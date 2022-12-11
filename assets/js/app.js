toggleBtn = document.querySelector(".header-toggle-button div");
headerDiv = document.querySelector(".compound-header");
contactBtn = document.querySelector(".contact-us");

showCookiesBlock();
listenersRegister();

function listenersRegister(){
    toggleBtn.addEventListener("click", (e) => {
        totalOffset = headerDiv.offsetHeight - toggleBtn.offsetHeight;
        if(headerDiv.style.top === `-${totalOffset}px`){
            headerDiv.setAttribute("style", `top:0px;`);
            toggleBtn.innerHTML = '<svg height=20 width=20 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" /></svg>'
            return ;
        }
        headerDiv.setAttribute("style", `top:-${totalOffset}px;`)
        toggleBtn.innerHTML = '<svg height=20 width=20 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" /> </svg>'
    });

    contactBtn.addEventListener("click", () =>{
        const divBlock = document.createElement("DIV");
        divBlock.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        divBlock.style.position = "fixed";
        divBlock.style.width = "100%";
        divBlock.style.height = "100%";
        divBlock.style.zIndex = "2";
        divBlock.style.display = "flex";
        divBlock.style.flexDirection = "column";
        divBlock.style.alignItems = "center";
        divBlock.style.justifyContent = "center";
        const divMessageContainer = document.createElement("DIV");
        divMessageContainer.style.height = "15rem";
        divMessageContainer.style.width = "20rem";
        divMessageContainer.style.backgroundColor = "rgba(255, 255, 255, 1)";
        divMessageContainer.style.color = "black";
        divMessageContainer.style.zIndex = "3";
        divMessageContainer.textContent = "If you want to contact us, type your email below:";
        divMessageContainer.style.display = "flex";
        divMessageContainer.style.flexDirection = "column";
        divMessageContainer.style.alignItems = "center";
        divMessageContainer.style.rowGap = "1rem";
        const emailInput = document.createElement("INPUT");
        emailInput.type = "email";
        emailInput.placeholder = "test@email.com";
        const submitInput = document.createElement("INPUT");
        submitInput.type = "submit";
        submitInput.value = "send";
        submitInput.style.width = "5rem";
        submitInput.style.textAlign = "center";
        submitInput.onclick = () => {
            divBlock.remove();
        }
        const closeBtn = document.createElement("BUTTON");
        closeBtn.innerHTML = "&times";
        closeBtn.style.width = "5rem";
        closeBtn.onclick = () => {
            divBlock.remove();
        }
        divMessageContainer.appendChild(emailInput);
        divMessageContainer.appendChild(closeBtn);
        divMessageContainer.appendChild(submitInput);
        divBlock.appendChild(divMessageContainer);
        headerDiv.parentElement.insertBefore(divBlock,headerDiv);
    });
}

function showCookiesBlock(){
    setTimeout(()=>{
        divBlock = document.createElement("DIV");
        pBlock = document.createElement("DIV");
        hideBtnDiv = document.createElement("DIV");
        hideBtn = document.createElement("BUTTON");
        hideBtn.style.height = "100%";
        hideBtn.onclick = () => {
            divBlock.remove();
        }
        hideBtn.textContent = "Hide";
        hideBtnDiv.style.flexGrow = "1";
        pBlock.style.flexGrow = "3";
        divBlock.style.display = "flex"
        divBlock.style.position = "fixed";
        divBlock.style.bottom = 0;
        pBlock.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ratione veritatis commodi obcaecati quod veniam consequatur necessitatibus, aliquam sequi tempore vitae quas magnam repellat? Impedit placeat magnam sunt accusantium repellat.";
        divBlock.style.width = "100%";
        divBlock.style.border = ".5rem #efefef solid";
        divBlock.style.backgroundColor = "white";
        hideBtnDiv.appendChild(hideBtn);
        divBlock.appendChild(pBlock);
        divBlock.appendChild(hideBtnDiv);
        document.querySelector("body").appendChild(divBlock);
    },3000)
}