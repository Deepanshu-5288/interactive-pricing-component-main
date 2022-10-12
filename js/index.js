var slider = document.querySelector(".slider-range");
slider.oninput = function() {
    document.querySelector(".checkbox").addEventListener("click", () => {
        if(document.querySelector(".checkbox").checked){
            if(this.value<=10000){
                document.querySelector(".amount").innerText = "$6.00";
                document.querySelector(".pageviews").innerText = "10k";
                slider.value=10000;
            }
            if(this.value>10000 && this.value<=50000){
                document.querySelector(".amount").innerText = "$9.00";
                document.querySelector(".pageviews").innerText = "50k";
                slider.value=50000;
            }
            if(this.value>50000 && this.value<=100000){
                document.querySelector(".amount").innerText = "$12.00";
                document.querySelector(".pageviews").innerText = "100k";
                slider.value=100000;
            }
            if(this.value>100000 && this.value<=500000){
                document.querySelector(".amount").innerText = "$18.00";
                document.querySelector(".pageviews").innerText = "500k";
                slider.value=500000;
            }
            if(this.value>500000 && this.value<=1000000){
                document.querySelector(".amount").innerText = "$27.00";
                document.querySelector(".pageviews").innerText = "1M";
                slider.value=1000000;
            }
        }else{
            if(this.value<=10000){
                document.querySelector(".amount").innerText = "$8.00";
                document.querySelector(".pageviews").innerText = "10k";
                slider.value=10000;
            }
            if(this.value>10000 && this.value<=50000){
                document.querySelector(".amount").innerText = "$12.00";
                document.querySelector(".pageviews").innerText = "50k";
                slider.value=50000;
            }
            if(this.value>50000 && this.value<=100000){
                document.querySelector(".amount").innerText = "$16.00";
                document.querySelector(".pageviews").innerText = "100k";
                slider.value=100000;
            }
            if(this.value>100000 && this.value<=500000){
                document.querySelector(".amount").innerText = "$24.00";
                document.querySelector(".pageviews").innerText = "500k";
                slider.value=500000;
            }
            if(this.value>500000 && this.value<=1000000){
                document.querySelector(".amount").innerText = "$36.00";
                document.querySelector(".pageviews").innerText = "1M";
                slider.value=1000000;
            }
        }
    })
    if(document.querySelector(".checkbox").checked){
        if(this.value<=10000){
            document.querySelector(".amount").innerText = "$6.00";
            document.querySelector(".pageviews").innerText = "10k";
            slider.value=10000;
        }
        if(this.value>10000 && this.value<=50000){
            document.querySelector(".amount").innerText = "$9.00";
            document.querySelector(".pageviews").innerText = "50k";
            slider.value=50000;
        }
        if(this.value>50000 && this.value<=100000){
            document.querySelector(".amount").innerText = "$12.00";
            document.querySelector(".pageviews").innerText = "100k";
            slider.value=100000;
        }
        if(this.value>100000 && this.value<=500000){
            document.querySelector(".amount").innerText = "$18.00";
            document.querySelector(".pageviews").innerText = "500k";
            slider.value=500000;
        }
        if(this.value>500000 && this.value<=1000000){
            document.querySelector(".amount").innerText = "$27.00";
            document.querySelector(".pageviews").innerText = "1M";
            slider.value=1000000;
        }
    }else{
        if(this.value<=10000){
            document.querySelector(".amount").innerText = "$8.00";
            document.querySelector(".pageviews").innerText = "10k";
            slider.value=10000;
        }
        if(this.value>10000 && this.value<=50000){
            document.querySelector(".amount").innerText = "$12.00";
            document.querySelector(".pageviews").innerText = "50k";
            slider.value=50000;
        }
        if(this.value>50000 && this.value<=100000){
            document.querySelector(".amount").innerText = "$16.00";
            document.querySelector(".pageviews").innerText = "100k";
            slider.value=100000;
        }
        if(this.value>100000 && this.value<=500000){
            document.querySelector(".amount").innerText = "$24.00";
            document.querySelector(".pageviews").innerText = "500k";
            slider.value=500000;
        }
        if(this.value>500000 && this.value<=1000000){
            document.querySelector(".amount").innerText = "$36.00";
            document.querySelector(".pageviews").innerText = "1M";
            slider.value=1000000;
        }
    }
    
    
  }