# deThread - MD5 Hash Decryption Demo Application

[Checkout our website and demo application!](dethread.io)<br />
[Provide feedback on how deThread can improve.](https://docs.google.com/forms/d/e/1FAIpQLSdRxi7h0A7A0YFU5Bmcj1nduDyMIPpE5H9zZzPCwHnAY7cgdQ/viewform)<br />
[Visit the main repo for the deThread library.](https://github.com/deThread/dethread)

---

deThread is a library that enables distributed computing with JavaScript in the web browser. deThread handles server-side application logic & task distribution, task failure management (e.g. client disconnection) and client management, and encourages the use of web workers on the client to maximize the processing of tasks in parallel.

To demonstrate the utlity of using deThread, we built an application with the library that applies distributed computing to MD5 hash decryption.
Our application uses a brute force process to decrypt the hash into clear text, trying all combinations of the lowercase alphabet until the hash is decrypted.
For a word of length **N**, the number of combinations of the lowercase alphabet is **26 ^ N**.
A host user selects the MD5 hash for a target word and starts the distributed process.

Features:
* Non-host clients may join a session before the host starts the process or can join an existing ongoing session.
* If a client leaves the session, deThread saves the unfinished task load for another client to take in the future.
* Each client may choose to use multiple web workers in order to run multiple tasks at the same time.

---

## Resources

[Learn more about **MD5 Hashes**](http://searchsecurity.techtarget.com/definition/MD5).<br />
[Learn more about **Distributed Computing**](https://www.techopedia.com/definition/7/distributed-computing-system).

---

## How to use this Demo
* Select "Join Demo"
* Join a room to compute MD5 hash decryption

To host:

* Select "Host" (if a distributed process is currently running, you must wait for the process to complete)
* Enter the settings for the session:
  1. Length of the target clear text
  2. Hash (32 characters) of the clear text
  3. Number of web workers for your client
* Click start to begin decryption!

To participate:

* If the Host button is visible, wait for another client to host a session.
* Enter the number of workers for your client
* Click submit to join the decryption session!
