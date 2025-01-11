import React from "react";
import "./LabTestComponent.css"; // Import CSS for styling (optional)

const LabTestComponent = (props) => {
    const {
        iconText,
        iconTag,
        iconUrl,
        deeplink,
        order,
        isActive,
        eventName,
        serviceName,
        serviceType,
        checkForCorporates,
        enabledCorporates,
        disabledCorporates,
    } = props.labTest;

    return (
        <div className={`lab-test-component ${isActive ? "active" : "inactive"}`}> {/* Add a class for styling */}
            <div className="lab-test-header">
                <img src={iconUrl} alt={iconText} className="lab-test-icon" />
                <h2 className="lab-test-title">{iconText}</h2>
            </div>

            {iconTag && <span className="lab-test-tag">{iconTag}</span>}

            <div className="lab-test-details">
                <p>Service Name: {serviceName}</p>
                <p>Service Type: {serviceType}</p>
                <p>Order: {order}</p>
                <p>Event Name: {eventName}</p>
            </div>

            <a
                href={deeplink}
                target="_blank"
                rel="noopener noreferrer"
                className="lab-test-link"
            >
                Book Now
            </a>

            {checkForCorporates && (
                <div className="corporates-info">
                    <p>Enabled Corporates: {enabledCorporates.join(", ")}</p>
                    <p>Disabled Corporates: {disabledCorporates.join(", ")}</p>
                </div>
            )}
        </div>
    );
};

export default LabTestComponent;
