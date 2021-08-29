<!DOCTYPE html>



<html>

<head>
    <meta charset="UTF-8">
    <title>Open-Mind-IT</title>
    
    <link rel="stylesheet" type="text/css" href="css/style.css">
 
</head>
<body>



<main>

                <form class="contact__form" action="contactForm.php" method="post">
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

</main>

</body>
</html>



