import { useState } from "react";

function More() {
  const [tab, setTab] = useState("Profile");
  const [showTooltip, setShowTooltip] = useState(false);
  const [search, setSearch] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const technologies = [
    "React",
    "JavaScript",
    "Python",
    "Java",
    "HTML",
    "CSS",
    "NodeJS",
    "MongoDB",
    ];
    const images = [
    "https://picsum.photos/200?1",
    "https://picsum.photos/200?2",
    "https://picsum.photos/200?3",
    ];

  return (
    <div>
      <h1>More Page</h1>

      <button onClick={() => setTab("Profile")}>
        Profile
      </button>

      <button onClick={() => setTab("Settings")}>
        Settings
      </button>

      <button onClick={() => setTab("About")}>
        About
      </button>

      <hr />

      {tab === "Profile" && (
        <h3>Profile Information</h3>
      )}

      {tab === "Settings" && (
        <h3>Settings Page</h3>
      )}

      {tab === "About" && (
        <h3>About Application</h3>
      )}
      <hr />

<h2>Tooltip Demo</h2>

<button
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
    >
    Hover Me
    </button>

    {showTooltip && (
    <p>This is a tooltip message!</p>
    )}
    <hr />

    <h2>Autocomplete Demo</h2>

    <input
    type="text"
    placeholder="Search Technology"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />

    <ul>
    {technologies
        .filter((item) =>
        item.toLowerCase().includes(
            search.toLowerCase()
        )
        )
        .map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </ul>
    <hr />

    <h2>Accordion Demo</h2>

    <button
    onClick={() => setShowContent(!showContent)}
    >
    {showContent ? "Hide Details" : "Show Details"}
    </button>

    {showContent && (
    <div>
        <p>
        This content can be expanded and collapsed.
        It is commonly used in FAQs and settings pages.
        </p>
    </div>
    )}
    <hr />

    <h2>Modal Popup Demo</h2>

    <button onClick={() => setShowModal(true)}>
    Open Modal
    </button>

    {showModal && (
    <div
        style={{
        border: "1px solid black",
        padding: "20px",
        marginTop: "10px",
        width: "300px",
        backgroundColor: "#f5f5f5",
        }}
    >
        <h3>User Information</h3>

        <p>Welcome to the Modal Popup Demo!</p>

        <button onClick={() => setShowModal(false)}>
        Close
        </button>
    </div>
    )}
    <hr />

    <h2>Image Gallery Demo</h2>

    <div>
    {images.map((img, index) => (
        <img
        key={index}
        src={img}
        alt="Gallery"
        width="100"
        style={{
            margin: "10px",
            cursor: "pointer",
        }}
        onClick={() => setSelectedImage(img)}
        />
    ))}
    </div>

    {selectedImage && (
    <div>
        <h3>Selected Image</h3>

        <img
        src={selectedImage}
        alt="Selected"
        width="300"
        />
    </div>
    )}
    
    </div>
  );
}

export default More;