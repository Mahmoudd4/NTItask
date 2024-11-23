First of all I created the app.js file, where it outputs a Hello world.
Then I created the package.json for its dependencies
Then I created the Dockerfile which will be used for building this image, also exposing port 3000.
Then I went on and installed the jenkins server on my ubuntu virtual machine.
In my jenkins pipeline I created 2 environment varialbes which were the EC2_HOST and the PEM_FILE.
For the PEM_FILE, I first added the .pem file to jenkins as a secret file, by going into my jenkins dashboard >>> Manage Jenkins >>> Credentials >>> clicking on system >>> clicking on "Add credentials" then choosing the kind a secret file for my .pem
Here is an image for the mypemkey credential I created that had the file NTI.pem which I used in the code:
