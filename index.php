<!DOCTYPE html>



<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open-Mind-IT</title>
    
    <link rel="stylesheet" type="text/css" href="css/style.css">
 
    

</head>
<main>
<section id="contact-id" class="contact">
            <div class="contact__form__wrapper">
                <form class="contact__form" action="contactForm.php" method="POST">
                    <label class="contact__label" from="name">Your name</label>
                    <input class="contact__input" r type="text" id="name" name="name" placeholder="John"
                        pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$">
                    <label class="contact__label" class="contact__number">Contact number</label>
                    <input class="contact__input" type="tel" id="number" name="number" placeholder="600200800"
                        pattern="[0-9]{3}[0-9]{3}[0-9]{3}">
                    <label class="contact__label" from="email">Your email</label>
                    <input class="contact__input" type="text" id="email" name="email" placeholder="email">
                    <label class="contact__label" from="msg">Your message</label>
                    <textarea class="contact__textarea" required name="message" id="message" cols="50" rows="10"
                        placeholder="message"></textarea>
                    <input class="contact__form__submit" name="submit" type="submit" value="Submit">
                </form>
                <div class="contact__other__wrapper">
                    <img class="contact__phone__img" src="assets/smartphone.png" alt="phone image">
                    <p class="contact__phone__despription">call us</p>
                    <img class="contact__mail__img" src="assets/gmail.png" alt="mail image">
                    <p class="contact__mail__despription">Send us an email</p>
                </div>
            </div>

        </section>
</main>

</body>
</html>



