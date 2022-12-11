toggleBtn = document.querySelector(".header-toggle-button div");
headerDiv = document.querySelector(".compound-header");
contactBtn = document.querySelector(".contact-us");

showCookiesBlock();
registerListeners();

function registerListeners(){
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

    contactBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        const modalBlock = document.createElement("DIV");
        modalBlock.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        modalBlock.style.top = "0";
        modalBlock.style.position = "fixed";
        modalBlock.style.width = "100%";
        modalBlock.style.height = "100%";
        modalBlock.style.zIndex = "2";
        modalBlock.style.display = "flex";
        modalBlock.style.flexDirection = "column";
        modalBlock.style.alignItems = "center";
        modalBlock.style.justifyContent = "center";
        const modalMessageWindowDiv = document.createElement("DIV");
        modalMessageWindowDiv.style.height = "12rem";
        modalMessageWindowDiv.style.width = "20rem";
        modalMessageWindowDiv.style.backgroundColor = "rgba(255, 255, 255, 1)";
        modalMessageWindowDiv.style.color = "black";
        modalMessageWindowDiv.style.zIndex = "3";
        modalMessageWindowDiv.textContent = "If you want to contact us, type your email below:";
        modalMessageWindowDiv.style.display = "flex";
        modalMessageWindowDiv.style.flexDirection = "column";
        modalMessageWindowDiv.style.alignItems = "center";
        modalMessageWindowDiv.style.rowGap = "1rem";
        const emailInput = document.createElement("INPUT");
        emailInput.type = "email";
        emailInput.placeholder = "test@email.com";
        const submitInput = document.createElement("INPUT");
        submitInput.type = "submit";
        submitInput.value = "send";
        submitInput.style.width = "5rem";
        submitInput.style.textAlign = "center";
        submitInput.onclick = () => {
            modalBlock.remove();
        }
        const closeBtn = document.createElement("BUTTON");
        closeBtn.innerHTML = "&times";
        closeBtn.style.width = "5rem";
        closeBtn.onclick = () => {
            modalBlock.remove();
        }
        const actionsMenuBar = document.createElement("DIV");
        actionsMenuBar.style.display = "flex";
        actionsMenuBar.style.columnGap = "1rem";
        actionsMenuBar.appendChild(submitInput);
        actionsMenuBar.appendChild(closeBtn);
        modalMessageWindowDiv.appendChild(emailInput);
        modalMessageWindowDiv.appendChild(actionsMenuBar);
        modalBlock.appendChild(modalMessageWindowDiv);
        headerDiv.parentElement.insertBefore(modalBlock,headerDiv);
    });
}

function showCookiesBlock(){
    setTimeout(()=>{
        bottomCookiesDiv = document.createElement("DIV");
        pBlock = document.createElement("DIV");
        hideBtnDiv = document.createElement("DIV");
        hideBtn = document.createElement("BUTTON");
        hideBtn.style.height = "100%";
        hideBtn.onclick = () => {
            bottomCookiesDiv.remove();
        }
        hideBtn.textContent = "Hide";
        hideBtnDiv.style.flexGrow = "1";
        pBlock.style.flexGrow = "3";
        bottomCookiesDiv.style.display = "flex"
        bottomCookiesDiv.style.position = "fixed";
        bottomCookiesDiv.style.bottom = 0;
        pBlock.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ratione veritatis commodi obcaecati quod veniam consequatur necessitatibus, aliquam sequi tempore vitae quas magnam repellat? Impedit placeat magnam sunt accusantium repellat.";
        bottomCookiesDiv.style.width = "100%";
        bottomCookiesDiv.style.border = ".5rem #efefef solid";
        bottomCookiesDiv.style.backgroundColor = "white";
        hideBtnDiv.appendChild(hideBtn);
        bottomCookiesDiv.appendChild(pBlock);
        bottomCookiesDiv.appendChild(hideBtnDiv);
        document.querySelector("body").appendChild(bottomCookiesDiv);
    },3000)
}
