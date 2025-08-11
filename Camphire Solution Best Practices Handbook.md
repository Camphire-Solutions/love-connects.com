# 👋 Camphire Solution Best Practices Handbook

Hi Teammate!

**Big work ahead. Big opportunities for those who step up.**
We move fast. We think sharp. We only win together.

**Spot it. Fix it. Share it.**  
See a bug? Log it or kill it.  
See confusion? Clear it up.  
See a better way? Speak it out.

**Follow the playbook.**  
Simple Modular code. Structured workflow. No surprises.

**Feedback isn’t extra --> it’s expected.**  
First project? You must suggest one improvement to our guidelines.  
One insight, one upgrade, one way to raise the bar.

**Motto:**  
See a gap? **Close it.**  
See a risk? **Name it.**  
See a win? **Claim it.**

Questions? Ask early.  
Ideas? Don’t hold back.  
We act as one team - never alone.

**Work sharp. Ship proud. Build great software for our customers...**

Let’s make it happen - together.  
Those who help raise the bar get rewarded.

---
## **Development Environment: Why Docker?**

**Why:**  
Every developer’s computer is different - different libraries, OS, even tiny version mismatches. Docker gives us a “clean room” so your code runs exactly the same everywhere (on your PC, my laptop, or the production server).  
**Pinning image versions** prevents random failures if the underlying system changes.

**Decision Tree:**

- _Need reproducibility, speed, and stress-free onboarding?_ → Use Docker with **pinned** base image tags (`python:3.11.7-slim`, not just `python:3.11`).
- _Just hacking a quick script for yourself?_ → Virtual environments are OK, but for team code, always use Docker.
    
**How:**
- Every project must include a `Dockerfile` that installs everything needed (libraries, tools, dependencies).
- If your part needs multiple services (like a web server and a database), include a `docker-compose.yml`.
- All code and tests must be runnable in Docker.
- **Pin all base images and package versions.**
    

**Real-World Case Study:**  
_A Python app worked on one laptop, failed on another after a month. Why? The base image `FROM python:3.11` updated to a new OS version and broke dependencies. After switching to `FROM python:3.11.7-slim`, the build was rock-solid everywhere, every time._

**Example:**

```bash
docker build -t yourmodule .
docker run yourmodule
```

_No setup headaches, no version mismatches._

---

## **Managing Dependencies**

**Why:**  
If code depends on hidden libraries or versions, it can break for someone else - even if it works for you.  Explicitly listing dependencies makes your code easy for others to install, run, and maintain.

**Decision Tree:**

-  Always use `requirements.txt` for Python, `package-lock.json` for Node.
- _Want to avoid “it worked yesterday” bugs?_ → **Pin** all dependency versions.
- _Need the fastest onboarding?_ → Use a lockfile or Docker, never manual installs.

**Example:**

```
# requirements.txt for Python
flask==2.3.2
requests>=2.0
```

**Real-World Case Study:**  
_A critical build failed in CI after a tiny update in an upstream library. Locking all dependencies fixed the pipeline and made future onboarding instant for new devs._

---

## **Building Modular, Functional Code**

**Why:**  
Simple, self-contained pieces (modules) are easier to build, fix, test, and combine later - especially when working as a team. Functional code (using pure functions) avoids bugs caused by hidden “state” or side effects.

**Decision Tree:**
- _Can it be a pure function?_ → Make it one!
- _Does it handle external state?_ → Separate I/O from logic.
- _Needs to interact with other modules?_ → Use documented, simple interfaces.

**How:**
- Break big problems into small, focused modules.
- Each module should do one thing well and only talk to others via **clear interfaces**. 
- **Prefer pure functions:** Functions that only depend on inputs and return outputs - no global variables, no “magic” behind the scenes.
    
### **Functional (Good Example)**

 ```python
def filter_active_users(users): 
	return [user for user in users if user.get('active')] 
	``` 

_Why functional?_
- **Always returns a _new_ list of active users.**
- **Does NOT change any external state.**
- Every call is independent - no hidden dependencies or bugs.

---
### **Not Functional (Bad Example)**

```python
active_users = []

def collect_active_users(users):
    """
    Appends active users to a global list (BAD: relies on global state).
    """
    for user in users:
        if user.get('active'):
            active_users.append(user)
    return active_users
```

_Why not functional?_

-  **Modifies a global list (`active_users`) every time it’s called.**
- Result **depends on what was in `active_users` before** - not just the input argument!
- Can lead to **unexpected results, duplicate entries, and bugs** if called multiple times or from different places.
---

## **Clear Programming Style & Guidelines**

**Why:**  
Consistent, well-structured code speeds up collaboration, simplifies reviews, and strengthens your professional credibility. As a rule, if a function exceeds **~40 lines**, consider breaking it into smaller, logically cohesive parts. Follow the Google Style Guide and use clear, descriptive function names.  

https://google.github.io/styleguide/

**Example:**

```python
# Good
def calculate_total_price(items):
    # ...

# Bad
def x(y):
    # ...
```


---

## ** Testing Your Code**

**Why:**  
Tests validate your work and catch issues before they hit anyone else. Robust tests keep the whole team moving fast and with confidence.  Always state your testing strategy and tools in your Solution Plan - right at the beginning.  If you leverage AI-assisted testing or unconventional methods, highlight them and explain your approach. We value learning about smart new tools -share what works.

**Decision Tree:**
- _Is it a public function or critical logic?_ → Must have a unit test.
- _Is code coverage <80%?_ → Add more tests before merging.
    
**How:**
- Every function/class should have tests for:
    - Normal use (does what it should)
    - Edge cases (empty input, huge numbers, etc.)
    - Error cases (bad input, wrong types)
        
- Use:
    - Python: `pytest` or `unittest`
    - JS: `jest` or `mocha`

**Example (Python):**

```python
def test_add():
    assert add(1, 2) == 3
    assert add(0, 0) == 0
    assert add(-1, 1) == 0
```

_Run your tests with:_

```bash
pytest
# or for coverage:
coverage run -m pytest
coverage report -m
```

---
## **Coverage: Testing Thoroughly**

**Why:**  
We aim for thorough testing - industry standard is 80% coverage or above.  
**Clearly state your coverage targets and how you measure them at the very start of your Solution Plan.**

**How:**
- Use coverage tools (like `coverage.py` for Python, `jest --coverage` for JS).
- Send the report or a screenshot with your code
    
---

## **Documentation (Make Life Easier for Everyone!)**

**Why:**  
Clear documentation saves time, helps new teammates, and elevates your reputation.  
Great docs mean fewer questions later - your work speaks for itself.  
**Be ready to explain your code in detail and support others by documenting thoroughly.**  
If you use a documentation strategy or tool, mention it proudly in your Solution Proposal.

**Decision Tree:**
- _Will anyone else use or maintain this?_ → Must have a `README.md` and docstrings.
- _Is setup nontrivial?_ → Add step-by-step Docker or environment setup.

**How:**
- Each module needs a `README.md`:
    - What the module does
    - How to install/run it (with Docker!)
    - How to use it (code snippets)
    - How to run tests
    - Dependencies
    - Any special tips or “gotchas”
        
- Add docstrings/comments to every public function/class.
    

**Example README:**

```markdown
# Module: UserAuth

## Purpose
Handles user login and registration.

## Setup
docker build -t userauth .
docker run userauth

## Usage
from userauth import login_user
login_user("username", "password")

## Running Tests
pytest

## Dependencies
- flask
- pytest
```
    
---

## **Why All This?**

- So **your code just works**, every time, for everyone - no guesswork.
- So **your work is easy to test, review, and scale**.
- So **you can show off your best, most professional work** (future clients love seeing clean code!).
- So **we all save time** and avoid annoying, last-minute bug hunts.

---

## **Code Review Checklist (Before Merging)**

-  All code runs successfully inside Docker
-  All dependencies are declared (no hidden or undeclared libs)
-  All public functions/classes have unit tests (with >80% coverage)
-  README.md updated (usage, setup, test instructions)
-  Code style and formatting follow guidelines (autoformatted)
-  Inline docstrings/comments explain all public code
-  No sensitive info (passwords, keys) committed
-  No debug code (prints, commented junk, etc.) remains
-  All TODOs and “temporary” code are resolved or clearly marked
    

---

## **Security Reminders**

- **Never** commit passwords, API keys, or sensitive data to the repository.
    - Use environment variables and `.env` files (don’t commit `.env`).
- Always **validate and sanitize all user inputs** to prevent security vulnerabilities (like SQL injection).
- Don’t use outdated or untrusted external libraries.
- Be cautious with third-party dependencies: check for known vulnerabilities (`pip-audit`, `npm audit`, etc.).
- For web applications and other high-risk products, we might have to perform targeted security testing before deployment.
- If you’re unsure about security best practices, ask for guidance!


---

## **What NOT To Do (Bad Practices)**

- Do **NOT** use print statements for debugging in production code. Use logging or remove debug prints before submitting.
- 
    - ❌ Bad:
        ```python
        print("Debug:", result)
        ```
        
- Do **NOT** hard-code file paths or URLs. Use configs or environment variables.
    - ❌ Bad:
        ```python
        open('/home/yourname/data.txt')
        ```
        
- Do **NOT** use global variables to share state between modules.
    
- Do **NOT** skip writing unit tests (“I tested by hand” is NOT enough).
    
- Do **NOT** submit code with commented-out chunks or old, unused functions.
    
- Do **NOT** ignore error handling - always check for possible exceptions and handle them gracefully.
    
- Do **NOT** leave TODOs or unfinished code unless you clearly mark it and communicate.
    
- Do **NOT** commit large files (data dumps, binaries) without approval.
    
- Do **NOT** use non-standard, obscure libraries unless approved.
    
**When in doubt - ask! Good questions are better than bad surprises.**

---

### **Questions? Suggestions? Ideas?**

If you see a better way or spot confusion in these guidelines, speak up - you’ll be recognized for it.
We reward team players who think independently, challenge the status quo, and help us all improve.  Smart, proactive voices shape our culture. Let’s grow together.

---

**Thanks for building with Camphire - let’s make awesome products, together!** 🚀