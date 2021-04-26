![favicon-32x32](https://user-images.githubusercontent.com/65377724/116018626-51094800-a5f7-11eb-9a4c-5d083990d9e0.png)
# brtnd
brtnd is an app that connects hosts to bartenders and bartender to hosts. If you have an event, you have a bartender. If you have drinks, you have a gig.

## Technologies Used
  *  MongoDB
  *  Express.js
  *  Node.js
  *  React


## MVPs

1. Host (user) Interface
2. Bartender (user) Interface
3. Order C.R.U.D.
4. Bartender Reviews

### Bonus Features
5. Google Maps API to display pins for bartender location (origin), host location(destination), and estimated time of arrival.
6. Host can tip a bartender

## Features

### Dual experience
Users can enter the app as a bartneder or host, each with its own interface and features.<img width="1136" alt="Screen Shot 2021-04-25 at 6 53 50 PM" src="https://user-images.githubusercontent.com/65377724/116018746-94fc4d00-a5f7-11eb-9599-3fda24189edd.png">

### Host experience
Hosts have the ability to place and view their active order. Until their order is complete, hosts are able to update, save, and delete their order through the interface, sending those changes to their bartender.
<img width="1174" alt="Screen Shot 2021-04-25 at 6 57 59 PM" src="https://user-images.githubusercontent.com/65377724/116019038-29ff4600-a5f8-11eb-86f1-916b3138994c.png">

### Bartender experience
Bartenders have the ability to accept an open order via the open orders link. From there, they can also view their current reviews to keep track of their progress and hone their craft.
<img width="1180" alt="Screen Shot 2021-04-25 at 7 00 30 PM" src="https://user-images.githubusercontent.com/65377724/116019194-84000b80-a5f8-11eb-9bbb-b3c2a245c937.png">

### Reiviews
Hosts are able to review bartenders, bartenders are able to view their reviews
<img width="1177" alt="Screen Shot 2021-04-25 at 10 03 36 PM" src="https://user-images.githubusercontent.com/65377724/116031247-21b40480-a612-11eb-95b3-b9a4521f9362.png">

## Code snippets
In creating the user's and bartender's ordering abilities, we wanted to limit each party to one order at a time so to ensure that a user would not make unneccesary orders that they would frequently cancel and a bartender could not monopolize available gigs. In order to do this, we had to create a custom route on our backend that utilized mogoose's findOne method, and accounting for the possibility of returning an empty array. Our final post route is as follows: 

    router.post("/signup", (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Check to make sure nobody has already signuped with a duplicate email
    User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res
          .status(400)
          .json({ email: "A user has already registered with this address" });
      } else {
        // Otherwise create a new user
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          });
        });
      }
    });
    }); 
