
        // login button event handler

        const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";


            const transitionArea = document.getElementById("transition-area");
            transitionArea.style.display = "block";
        });


        // Add Deposit button Handler 

        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function(){
            const depositAmount = getInputNumber("depositAmount");

            updateSpanText("currentDeposit", depositAmount);
            updateSpanText("currentBalance", depositAmount);

            document.getElementById("depositAmount").value = "";
            
        });

        // withdraw button event handler 
        const withdrawBtn = document.getElementById("addWithdraw");
        withdrawBtn.addEventListener("click", function(){
            const withdrawNumber = getInputNumber("withdrawAmount");
            
            updateSpanText("currentWithdraw", withdrawNumber);
            updateSpanText("currentBalance", -1* withdrawNumber);

            document.getElementById("withdrawAmount").value = "";
        });


        function getInputNumber(id){
            const amount = document.getElementById(id).value;
            const amountNumber = parseFloat(amount);
            return amountNumber;
        }

        function updateSpanText(id, addedAmount){
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const total= addedAmount + currentNumber;
            document.getElementById(id).innerText = total;
        }



        // const currentDepositField = document.getElementById("currentDeposit").innerText;
        // const currentDepositNumber = parseFloat(currentDepositField);
        // const totalDeposit = depositAmount + currentDepositNumber;
        // document.getElementById("currentDeposit").innerText = totalDeposit;