// Basic JS Prototype
console.log("CIS Club Website Loaded");

/* ---------- BUTTON CREATOR (Common) ---------- */
function createButton(icon, bottom, color = "white") {
    const btn = document.createElement("button");
    btn.innerHTML = icon;
    btn.type = "button"; // Added for accessibility
    btn.setAttribute("aria-label", `Accessibility ${icon} button`); // Added for accessibility

    Object.assign(btn.style, {
        position: "fixed",
        bottom: bottom + "px",
        right: "20px",
        width: "60px",
        height: "60px",
        background: "#2F2FA8",
        color: color,
        border: "none",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        transition: "0.3s",
        zIndex: "999999"
    });

    btn.onmouseover = () => btn.style.transform = "scale(1.1)";
    btn.onmouseout = () => btn.style.transform = "scale(1)";
    btn.onfocus = () => btn.style.outline = "2px solid #32CD32"; // Added for focus visibility
    btn.onblur = () => btn.style.outline = "none";

    document.body.appendChild(btn);
    return btn;
}

/* ---------- SCROLL BUTTON ---------- */
const scrollBtn = createButton("⌃", 90);
scrollBtn.setAttribute("aria-label", "Scroll to top"); // Fixed aria-label

/* Smooth Scroll */
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------- ACCESSIBILITY BUTTON ---------- */
const accessBtn = createButton("👨🏻‍💻", 20, "#32CD32");
accessBtn.setAttribute("aria-label", "Open accessibility options"); // Fixed aria-label

/* ---------- ACCESSIBILITY PANEL ---------- */
const panel = document.createElement("div");
panel.setAttribute("role", "dialog");
panel.setAttribute("aria-label", "Accessibility options panel");
panel.setAttribute("aria-hidden", "true"); // Fixed initial state

Object.assign(panel.style, {
    position: "fixed",
    top: "0",
    right: "-350px",
    width: "350px",
    height: "100vh",
    background: "#ffffff",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    transition: "0.4s",
    zIndex: "9999999",
    fontFamily: "Arial, sans-serif",
    overflowY: "auto"
});

document.body.appendChild(panel);

/* ---------- PANEL HEADER ---------- */
const header = document.createElement("div");
header.innerHTML = `<span style="color:white;font-size:18px;">ACCESSIBILITY OPTIONS</span>`;
Object.assign(header.style, {
    background: "#2F2FA8",
    padding: "16px",
    textAlign: "center",
    fontWeight: "bold",
    position: "relative"
});
panel.appendChild(header);

/* Close Button */
const closeBtn = document.createElement("button"); // Changed to button for accessibility
closeBtn.innerHTML = "✕";
closeBtn.type = "button";
closeBtn.setAttribute("aria-label", "Close accessibility panel");
Object.assign(closeBtn.style, {
    position: "absolute",
    right: "16px",
    top: "12px",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "0"
});
header.appendChild(closeBtn);

/* ---------- SECTION CREATOR ---------- */
function createSection(title) {
    const sec = document.createElement("div");
    sec.style.padding = "14px";
    sec.style.paddingTop = "20px"; // Added spacing
    if (title) {
        sec.innerHTML = `<div style="font-size:14px;font-weight:bold;color:#666;margin-bottom:8px;">${title}</div>`;
    }
    panel.appendChild(sec);
    return sec;
}

/* ---------- BUTTON GRID CREATOR ---------- */
function createGridButton(text, icon = "") {
    const btn = document.createElement("button"); // Changed to button for accessibility
    btn.type = "button";
    btn.setAttribute("aria-label", text);
    Object.assign(btn.style, {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        textAlign: "center",
        width: "100px",
        margin: "5px",
        cursor: "pointer",
        fontSize: "13px",
        background: "white",
        transition: "0.2s"
    });

    btn.innerHTML = `${icon ? icon + "<br>" : ""}${text}`;
    
    // Add hover effect
    btn.onmouseover = () => btn.style.background = "#f5f5f5";
    btn.onmouseout = () => btn.style.background = "white";
    btn.onfocus = () => {
        btn.style.outline = "2px solid #2F2FA8";
        btn.style.background = "#f5f5f5";
    };
    btn.onblur = () => {
        btn.style.outline = "none";
        btn.style.background = "white";
    };
    
    return btn;
}

function createGridRow(parent, btns) {
    const row = document.createElement("div");
    Object.assign(row.style, {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "5px",
        flexWrap: "wrap" // Added for responsiveness
    });
    btns.forEach(b => row.appendChild(b));
    parent.appendChild(row);
}

/* ---------- FULL PANEL UI ---------- */

/* Keyboard Nav */
const sec1 = createSection("");
createGridRow(sec1, [
    createGridButton("keyboard navigation", "⌨"),
    createGridButton("block animations", "🔕")
]);

/* COLOR CONTRAST */
const sec2 = createSection("COLOR CONTRAST");
createGridRow(sec2, [
    createGridButton("uncolored display", "⚙"),
    createGridButton("bright contrast", "🔆"),
    createGridButton("reverse contrast", "🔃")
]);

/* TEXT SIZE */
const sec3 = createSection("TEXT SIZE");
createGridRow(sec3, [
    createGridButton("increase text", "⬆"),
    createGridButton("decrease text", "⬇"),
    createGridButton("readable text", "🅣")
]);

/* HIGHLIGHT CONTENT */
const sec4 = createSection("HIGHLIGHTING CONTENT");
createGridRow(sec4, [
    createGridButton("underline links", "🔗"),
    createGridButton("underline headers", "H"),
    createGridButton("image titles", "🖼")
]);

/* ZOOM */
const sec5 = createSection("ZOOM IN");
createGridRow(sec5, [
    createGridButton("big white cursor", "⬚"),
    createGridButton("big black cursor", "⬛"),
    createGridButton("zoom screen", "🔍")
]);

/* Footer links */
const footer = document.createElement("div");
footer.innerHTML = `
    <button type="button" style="width:100%;padding:12px;border-top:1px solid #eee;cursor:pointer;background:none;border:none;text-align:left;font-size:14px;">accessibility statement</button>
    <button type="button" style="width:100%;padding:12px;border-top:1px solid #eee;cursor:pointer;background:none;border:none;text-align:left;font-size:14px;">report an accessibility problem</button>
    <button type="button" style="width:100%;padding:12px;border-top:1px solid #eee;color:red;cursor:pointer;background:none;border:none;text-align:left;font-size:14px;">reset settings</button>
`;

// Add hover effects to footer buttons
footer.querySelectorAll('button').forEach(btn => {
    btn.onmouseover = () => btn.style.background = "#f5f5f5";
    btn.onmouseout = () => btn.style.background = "none";
    btn.onfocus = () => {
        btn.style.outline = "2px solid #2F2FA8";
        btn.style.background = "#f5f5f5";
    };
    btn.onblur = () => {
        btn.style.outline = "none";
        btn.style.background = "none";
    };
});

panel.appendChild(footer);

/* ---------- OPEN/CLOSE PANEL ---------- */
let open = false;

accessBtn.addEventListener("click", () => {
    panel.style.right = open ? "-350px" : "0";
    panel.setAttribute("aria-hidden", open ? "true" : "false");
    open = !open;
    
    // Focus close button when opening
    if (!open) return;
    setTimeout(() => closeBtn.focus(), 100);
});

closeBtn.addEventListener("click", () => {
    panel.style.right = "-350px";
    panel.setAttribute("aria-hidden", "true");
    open = false;
    // Return focus to accessibility button
    accessBtn.focus();
});

// Close panel with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && open) {
        panel.style.right = "-350px";
        panel.setAttribute("aria-hidden", "true");
        open = false;
        accessBtn.focus();
    }
});

// Close panel when clicking outside
document.addEventListener("click", (e) => {
    if (open && 
        !panel.contains(e.target) && 
        e.target !== accessBtn && 
        !accessBtn.contains(e.target)) {
        panel.style.right = "-350px";
        panel.setAttribute("aria-hidden", "true");
        open = false;
    }
});
// -------- LOGO CLICK TO RELOAD --------
document.addEventListener('DOMContentLoaded', function() {
    // Navbar logo reload
    const navLogo = document.querySelector('.logo-circle');
    if (navLogo) {
        // Add pointer cursor on hover (already done in CSS, but just in case)
        navLogo.style.cursor = 'pointer';
        
        navLogo.addEventListener('click', function(e) {
            e.preventDefault();
            // Add a brief animation effect before reloading
            this.style.transform = 'scale(0.8) rotate(10deg)';
            this.style.opacity = '0.7';
            this.style.cursor = 'progress'; // Change to loading cursor on click
            
            setTimeout(() => {
                window.location.reload();
            }, 300);
        });
        
        // Optional: Reset cursor after animation if user hovers away during the 300ms
        navLogo.addEventListener('mouseleave', function() {
            if (this.style.cursor === 'progress') {
                setTimeout(() => {
                    this.style.cursor = 'pointer';
                }, 300);
            }
        });
    }
    
    // Footer logo reload
    const footerLogoLink = document.querySelector('.footer-logo a');
    if (footerLogoLink) {
        // Make footer logo link also show pointer cursor
        footerLogoLink.style.cursor = 'pointer';
        
        footerLogoLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Add a brief animation effect before reloading
            const footerLogo = this.querySelector('img');
            if (footerLogo) {
                footerLogo.style.transform = 'scale(0.8)';
                footerLogo.style.opacity = '0.7';
            }
            
            setTimeout(() => {
                window.location.reload();
            }, 300);
        });
    }
});