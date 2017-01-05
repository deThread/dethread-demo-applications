# deThread - MD5 Hash Decryption Demo Application

[Checkout our website and demo application](dethread.io)!

To provide feed back on how deThread can improve, please [click here](https://docs.google.com/forms/d/e/1FAIpQLSdRxi7h0A7A0YFU5Bmcj1nduDyMIPpE5H9zZzPCwHnAY7cgdQ/viewform).

deThread is a library that enables distributed computing with JavaScript in the web browser. deThread handles server-side application logic & task distribution, task failure management (e.g. client disconnection) and client management, and encourages the use of web workers on the client to maximize the processing of tasks in parallel.

To demonstrate the utlity of using deThread, we built an application with the library that applies distributed computing to MD5 hash decryption.
Our application uses a brute force process to decrypt the hash into clear text, trying all combinations of the lowercase alphabet until the hash is decrypted.
For a word of length **N**, the number of combinations of the lowercase alphabet is **26 ^ N**.
A host user selects the MD5 hash for a target word and starts the distributed process.

Features:
* Non-host clients may join a session before the host starts the process or can join an existing ongoing session.
* If a client leaves the session, deThread saves the unfinished task load for another client to take in the future.
* Each client may choose to use multiple web workers in order to run multiple tasks at the same time.

[Learn more about **MD5**](http://searchsecurity.techtarget.com/definition/MD5).

[Learn more about **Distributed Computing**](https://www.techopedia.com/definition/7/distributed-computing-system).

---

## How to use this Demo
1. Select "Join Demo"
2. Join a room to compute MD5 hash decryption
3. Select "Host" (if a distributed process is currently running, you must wait for the process to complete)
4. Enter the settings for the session:
  * Length of the target clear text
  * Hash (32 characters) of the clear text
  * Number of web workers for your client
5. Click start to begin decryption!
