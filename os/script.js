// Questions dataset
const questions = [
  {
    q: "1. Bootstrap program is stored in:",
    opts: ["A) RAM", "B) ROM or EEPROM", "C) Hard disk", "D) Cache memory"],
    ans: "B",
  },
  {
    q: "2. In multiprogramming, the CPU switches to another job when:",
    opts: [
      "A) Current job finishes",
      "B) Current job waits for I/O",
      "C) Timer expires",
      "D) User requests it",
    ],
    ans: "B",
  },
  {
    q: "3. The degree of multiprogramming refers to:",
    opts: [
      "A) Number of CPUs",
      "B) Number of processes in memory",
      "C) Number of users",
      "D) Number of I/O devices",
    ],
    ans: "B",
  },
  {
    q: "4. Time-sharing systems primarily focus on:",
    opts: [
      "A) Interactive computer system",
      "B) Batch processing",
      "C) Real-time processing",
      "D) Network services",
    ],
    ans: "A",
  },
  {
    q: "5. DMA (Direct Memory Access) is used for:",
    opts: [
      "A) High-speed I/O devices",
      "B) CPU scheduling",
      "C) Memory allocation",
      "D) Process synchronization",
    ],
    ans: "A",
  },
  {
    q: "6. Which of the following is a batch processing system?",
    opts: [
      "A) Mainframe computers",
      "B) Personal computers",
      "C) Handheld computers",
      "D) Embedded systems",
    ],
    ans: "A",
  },
  {
    q: "7. Dual-mode operation provides:",
    opts: [
      "A) Protection for the operating system",
      "B) Faster execution",
      "C) Multiple user support",
      "D) Network communication",
    ],
    ans: "A",
  },
  {
    q: "8. System calls provide:",
    opts: [
      "A) Interface to OS services",
      "B) Direct hardware access",
      "C) Compiler functions",
      "D) Database operations",
    ],
    ans: "A",
  },
  {
    q: "9. A mode bit is used to:",
    opts: [
      "A) Distinguish between user and kernel mode",
      "B) Control I/O operations",
      "C) Manage memory",
      "D) Schedule processes",
    ],
    ans: "A",
  },
  {
    q: "10. Privileged instructions can only be executed in:",
    opts: [
      "A) User mode",
      "B) Kernel mode",
      "C) Both modes",
      "D) Protected mode only",
    ],
    ans: "B",
  },
  {
    q: "11. The main purpose of an interrupt is to:",
    opts: [
      "A) Stop program execution permanently",
      "B) Signal CPU of an event requiring attention",
      "C) Transfer control to user program",
      "D) Allocate memory",
    ],
    ans: "B",
  },
  {
    q: "12. Asymmetric multiprocessing involves:",
    opts: [
      "A) Master-slave relationship",
      "B) All processors equal",
      "C) No coordination needed",
      "D) Single processor only",
    ],
    ans: "A",
  },
  {
    q: "13. Real-time systems are characterized by:",
    opts: [
      "A) Strict time constraints",
      "B) High throughput",
      "C) Maximum CPU utilization",
      "D) Multiple users",
    ],
    ans: "A",
  },
  {
    q: "14. Virtual memory allows:",
    opts: [
      "A) Execution of programs larger than physical memory",
      "B) Faster program execution",
      "C) Better GUI display",
      "D) Network communication",
    ],
    ans: "A",
  },
  {
    q: "15. Spooling stands for:",
    opts: [
      "A) Simultaneous Peripheral Operations On-Line",
      "B) Serial Processing Of Output Listings",
      "C) System Programming Of Operating Loops",
      "D) Standard Procedure Of Operation Loading",
    ],
    ans: "A",
  },
  {
    q: "16. The interrupt vector contains:",
    opts: [
      "A) Addresses of interrupt service routines",
      "B) Interrupt priorities",
      "C) Device identifiers",
      "D) Process states",
    ],
    ans: "A",
  },
  {
    q: "17. A trap is caused by:",
    opts: [
      "A) Hardware failure",
      "B) Error or user request",
      "C) Timer",
      "D) I/O completion",
    ],
    ans: "B",
  },
  {
    q: "18. Context switch involves:",
    opts: [
      "A) Saving state of current process",
      "B) Loading state of new process",
      "C) Switching between processes",
      "D) Switching users",
    ],
    ans: "C",
  },
  {
    q: "19. The operating system kernel is:",
    opts: [
      "A) Always in memory",
      "B) Loaded on demand",
      "C) Stored in secondary storage",
      "D) Part of application software",
    ],
    ans: "A",
  },
  {
    q: "20. An I/O bound process:",
    opts: [
      "A) Spends more time doing I/O",
      "B) Requires more CPU time",
      "C) Never uses CPU",
      "D) Only uses disk",
    ],
    ans: "A",
  },
  {
    q: "21. A CPU bound process:",
    opts: [
      "A) Requires more computation",
      "B) Spends more time in I/O",
      "C) Never performs I/O",
      "D) Uses only memory",
    ],
    ans: "A",
  },
  {
    q: "22. Turnaround time is:",
    opts: [
      "A) Time from submission to completion",
      "B) Time in ready queue",
      "C) Time in execution",
      "D) Time in waiting",
    ],
    ans: "A",
  },
  {
    q: "23. Response time in interactive systems is:",
    opts: [
      "A) Time from request to first response",
      "B) Total execution time",
      "C) Time to complete process",
      "D) Time in ready queue",
    ],
    ans: "A",
  },
  {
    q: "24. CPU utilization should ideally be:",
    opts: [
      "A) As high as possible",
      "B) As low as possible",
      "C) Around 50%",
      "D) Zero",
    ],
    ans: "A",
  },
  {
    q: "25. Multicore systems have:",
    opts: [
      "A) Multiple computing cores on single chip",
      "B) Multiple separate processors",
      "C) Single core with hyperthreading",
      "D) Multiple motherboards",
    ],
    ans: "A",
  },
  {
    q: "26. Operating system services are provided for:",
    opts: [
      "A) User convenience only",
      "B) System efficiency only",
      "C) User convenience and system efficiency",
      "D) Hardware management only",
    ],
    ans: "C",
  },
  {
    q: "27. A user interface can be:",
    opts: [
      "A) Command-line interface (CLI)",
      "B) Graphical user interface (GUI)",
      "C) Batch interface",
      "D) Any of these types",
    ],
    ans: "D",
  },
  {
    q: "28. An API (Application Programming Interface) is:",
    opts: [
      "A) Set of functions available to programmers",
      "B) Hardware specification",
      "C) System call itself",
      "D) Operating system kernel",
    ],
    ans: "A",
  },
  {
    q: "29. System call parameters can be passed by:",
    opts: [
      "A) Registers",
      "B) Block or table in memory",
      "C) Stack",
      "D) Any of these methods",
    ],
    ans: "D",
  },
  {
    q: "30. Which is a process control system call?",
    opts: ["A) fork()", "B) read()", "C) open()", "D) chmod()"],
    ans: "A",
  },
  {
    q: "31. Which is a file management system call?",
    opts: ["A) wait()", "B) create()", "C) malloc()", "D) signal()"],
    ans: "B",
  },
  {
    q: "32. Communication between processes can be achieved through:",
    opts: [
      "A) Shared memory",
      "B) Message passing",
      "C) Either shared memory or message passing",
      "D) Files only",
    ],
    ans: "C",
  },
  {
    q: "33. The MS-DOS operating system uses:",
    opts: [
      "A) Single-tasking",
      "B) Multi-tasking",
      "C) Time-sharing",
      "D) Distributed processing",
    ],
    ans: "A",
  },
  {
    q: "34. Layered approach in OS design means:",
    opts: [
      "A) OS divided into layers",
      "B) OS divided into modules",
      "C) OS as single unit",
      "D) OS distributed across network",
    ],
    ans: "A",
  },
  {
    q: "35. The main advantage of layered approach is:",
    opts: [
      "A) Simplicity of construction",
      "B) High performance",
      "C) Less memory usage",
      "D) Faster execution",
    ],
    ans: "A",
  },
  {
    q: "36. The main disadvantage of layered approach is:",
    opts: [
      "A) Careful planning required",
      "B) Easy to implement",
      "C) Very modular",
      "D) Highly portable",
    ],
    ans: "A",
  },
  {
    q: "37. A microkernel provides:",
    opts: [
      "A) Minimal process and memory management",
      "B) All OS services in kernel",
      "C) No process management",
      "D) Only file management",
    ],
    ans: "A",
  },
  {
    q: "38. Loadable kernel modules:",
    opts: [
      "A) Can be loaded at boot or runtime",
      "B) Must be loaded at boot only",
      "C) Cannot be unloaded",
      "D) Are not used in modern OS",
    ],
    ans: "A",
  },
  {
    q: "39. Virtual machines provide:",
    opts: [
      "A) Illusion of multiple machines",
      "B) Faster execution",
      "C) Less memory usage",
      "D) Direct hardware access",
    ],
    ans: "A",
  },
  {
    q: "40. The Java Virtual Machine (JVM):",
    opts: [
      "A) Executes Java bytecode",
      "B) Executes machine code",
      "C) Executes assembly code",
      "D) Executes Python code",
    ],
    ans: "A",
  },
  {
    q: "41. System boot process starts with:",
    opts: [
      "A) Bootstrap program loading OS",
      "B) User login",
      "C) Application loading",
      "D) Network initialization",
    ],
    ans: "A",
  },
  {
    q: "42. GRUB is an example of:",
    opts: ["A) Boot loader", "B) File system", "C) Shell", "D) System call"],
    ans: "A",
  },
  {
    q: "43. A shell is:",
    opts: [
      "A) Command interpreter",
      "B) Part of kernel",
      "C) Hardware component",
      "D) Device driver",
    ],
    ans: "A",
  },
  {
    q: "44. Debugging a system involves:",
    opts: [
      "A) Finding and fixing errors",
      "B) Compiling programs",
      "C) Installing software",
      "D) Managing users",
    ],
    ans: "A",
  },
  {
    q: "45. System calls for communication include:",
    opts: [
      "A) send() and receive()",
      "B) open() and close()",
      "C) fork() and exec()",
      "D) malloc() and free()",
    ],
    ans: "A",
  },
  {
    q: "46. Protection mechanisms in OS:",
    opts: [
      "A) Control access to resources",
      "B) Increase CPU speed",
      "C) Manage network traffic",
      "D) Compile programs",
    ],
    ans: "A",
  },
  {
    q: "47. An operating system is a resource allocator and control program.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "48. The bootstrap program is the first program to run when a computer is powered on.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "49. Interrupts can only be generated by hardware devices.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "50. In multiprogramming, multiple programs are kept in memory simultaneously.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "51. Time-sharing and multitasking are the same concept.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "52. DMA transfers data directly between I/O device and CPU registers.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "53. Cache memory is larger but slower than main memory.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "54. A system call changes the mode from user mode to kernel mode.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "55. Privileged instructions can be executed in user mode.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "56. Symmetric multiprocessing requires special master processor.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "57. In asymmetric multiprocessing, all processors are treated equally.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "58. Hard real-time systems can tolerate occasional deadline misses.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "59. Spooling allows overlap of I/O of one job with computation of another.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "60. A trap is a software-generated interrupt.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "61. The kernel is the part of OS that runs in user mode.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "62. Context switching is overhead and does no useful work.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "63. Multicore systems have multiple processors on separate chips.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "64. System calls provide a means for user programs to request OS services.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "65. APIs hide the details of system calls from programmers.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "66. Microkernel architecture moves services to user space.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "67. Layered approach makes OS easier to debug and verify.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "68. Loadable kernel modules are more flexible than layered approach.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
  {
    q: "69. The shell is part of the operating system kernel.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "B",
  },
  {
    q: "70. System programs provide a convenient environment for program development and execution.",
    opts: ["A) TRUE", "B) FALSE"],
    ans: "A",
  },
];

const quizDiv = document.getElementById("quiz");

function renderQuiz() {
  quizDiv.innerHTML = "";
  questions.forEach((item, idx) => {
    const qDiv = document.createElement("div");
    qDiv.className = "q";
    qDiv.id = "q" + (idx + 1);

    const h = document.createElement("h3");
    h.textContent = item.q;
    qDiv.appendChild(h);

    const optsDiv = document.createElement("div");
    optsDiv.className = "opts";

    item.opts.forEach((opt, j) => {
      const label = document.createElement("label");
      label.className = "opt";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "q" + idx;
      radio.value = String.fromCharCode(65 + j);

      const span = document.createElement("span");
      span.textContent = opt;

      label.appendChild(radio);
      label.appendChild(span);
      optsDiv.appendChild(label);
    });

    qDiv.appendChild(optsDiv);
    quizDiv.appendChild(qDiv);
  });
}

function grade() {
  let correct = 0;
  questions.forEach((item, idx) => {
    const selected = document.querySelector(
      'input[name="q' + idx + '"]:checked'
    );
    const qElem = document.getElementById("q" + (idx + 1));

    qElem.classList.remove("correct", "wrong");
    qElem.querySelectorAll(".opt").forEach((l) => (l.style.opacity = "1"));

    if (selected) {
      const val = selected.value;
      if (val === item.ans) {
        correct++;
        qElem.classList.add("correct");
      } else {
        qElem.classList.add("wrong");
        qElem.querySelectorAll(".opt").forEach((l) => {
          if (l.querySelector("input").checked) l.style.fontWeight = "700";
        });
      }
    } else {
      qElem.classList.add("wrong");
    }

    const old = qElem.querySelector(".correctAnswer");
    if (old) old.remove();

    const ansText = document.createElement("div");
    ansText.style.marginTop = "8px";
    ansText.style.fontSize = "13px";
    ansText.style.color = "#0b1220";
    ansText.className = "correctAnswer";
    ansText.innerHTML =
      "<small><strong>Correct answer: </strong>" + item.ans + "</small>";

    qElem.appendChild(ansText);
  });

  const total = questions.length;
  const percent = Math.round((correct / total) * 100);
  const gradeLetter =
    percent >= 90
      ? "A"
      : percent >= 80
      ? "B"
      : percent >= 70
      ? "C"
      : percent >= 60
      ? "D"
      : "F";

  const summary = document.getElementById("summary");
  summary.innerHTML =
    '<div class="result"><div class="score">Score: ' +
    correct +
    " / " +
    total +
    " (" +
    percent +
    "%) — Grade: " +
    gradeLetter +
    '</div><div style="margin-top:8px"><small>Correct: ' +
    correct +
    " — Wrong/Unanswered: " +
    (total - correct) +
    "</small></div></div>";

  summary.scrollIntoView({ behavior: "smooth" });
}

function resetQuiz() {
  document
    .querySelectorAll("input[type=radio]")
    .forEach((r) => (r.checked = false));

  document.querySelectorAll(".q").forEach((q) => {
    q.classList.remove("correct", "wrong");
    const ca = q.querySelector(".correctAnswer");
    if (ca) ca.remove();
    q.querySelectorAll(".opt").forEach((l) => {
      l.style.fontWeight = "400";
      l.style.opacity = "1";
    });
  });

  document.getElementById("summary").innerHTML = "";
}

renderQuiz();
document.getElementById("submitBtn").addEventListener("click", grade);
document.getElementById("resetBtn").addEventListener("click", resetQuiz);
