interface formField {
    TextId: string;
    FieldId: string;
    TrustCount: number;
    Verified: boolean;
    Value: string;
    Edited: boolean;
}

let formFields: formField[] = [
    { TextId: "", FieldId: "age", TrustCount: 10, Verified: false, Value: "10", Edited: false},
    { TextId: "", FieldId: "sex", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "wakeUpStrokeCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "wakeUpStrokeUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "wakeUpDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "strokeCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "strokeUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "firstAttented", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "arrivalDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "arrivalTime", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "arrivedFrom", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "hospitalizedIn", TrustCount: NaN, Verified: false, Value: "2", Edited: false},
    { TextId: "", FieldId: "department", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioMedicalHistoryYes", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "radioMedicalHistoryNone", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioMedicalHistoryUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryHypertension", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryDiabetes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryHyperlipidemia", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryActiveSmoker", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryPreviousIschemic", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryPreviousHemorrhage", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryAtrialFibrillation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryCoronaryArtery", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryCongestiveHeartFailure", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryHIV", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxMedicalHistoryCOVIDPositive", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioTreatmentYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioTreatmentNone", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioTreatmentUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentAntidiabetics", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentAntihypertensives", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentAntiplatelets", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentAnticoagulants", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentHormonalContraception", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentStatin", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "glucose", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "cholesterol", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "systolic", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "diastolic", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "nihss", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "mrs", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "firstInrTesting", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "coma", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "brainImaging", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "imagingDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "infarctsYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "infarctsNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxInfarctsCortical", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxInfarctsSubCortical", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxBrainstem", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "strokeType", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "aspectScore", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioArterialYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioArterialNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialMCA1Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialMCA2Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialMCA3Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialACA", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialPCA1Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialPCA2Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialCEALeft", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialCIALeft", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialVertebral", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialMCA1Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialMCA2Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialMCA3Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialACARight", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialPCA1Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialPCA2Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialCEARight", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialCIARight", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxArterialBasilar", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "thrombolysisCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "thrombolysisUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "thrombolysisReason", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "thrombolysisDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "drugUsed", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioAnticoagulantYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioAnticoagulantNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "treatmentDose", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "bolusDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "thrombolysisGiven", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "thrombectomyCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "thrombectomyUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "thrombectomyReason", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "thrombectomyDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "groinDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "mTICIScore", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "reperfusionDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioComplicationThrombectomyYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioComplicationThrombectomyNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxThrombectomyVesselPerforation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxThrombectomyDissection", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxThrombectomyEmbolization", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxThrombectomyHematoma", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxThrombectomyOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "bleedingVolume", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "infratentorialCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "infratentorialUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "bleedingCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "bleedingUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "intraventricularCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "intraventricularUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "radioBleedingReasonYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioBleedingReasonNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxBleedingReasonArterialHypertension", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxBleedingReasonAneurysm", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxBleedingReasonArteriovenousMalformation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxBleedingReasonAnticoagulationTherapy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxBleedingReasonAmyloidAngiopathy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxBleedingReasonOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "antidoteAnticoagulants", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioNeurosurgeryYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioNeurosurgeryNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxNeurosurgeryIntracranialHematomaEvacuation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxNeurosurgeryExternalVentricularDrainage", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxNeurosurgeryDecompresiveCraniectomy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "clinicalSymptoms", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "symptomsDuration", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "bleedingSubarachnoidCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "bleedingSubarachnoidUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "huntHess", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioInterventionYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioInterventionNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxInterventionEndovascular", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxInterventionNeurosurgical", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxInterventionVentricularDrainage", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxInterventionDecompressiveCraniectomy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxInterventionOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "nimodipineTreatment", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioTreatmentPerformedYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioTreatmentPerformedNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPerformedAnticoagulation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPerformedThrombectomy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPerformedThrombolysis", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPerformedNeurosurgical", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "thrombolysisMimicCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "thrombolysisMimicUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "drugUsedThrombolysis", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioAnticoagulantMimicsYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioAnticoagulantMimicsNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "treatmentDoseMimics", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "bolusMimicDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "finalDiagnosis", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "ctmrPerfusion", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "coreVolume", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "hypoperfusionVolume", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "dischargeDestination", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "dischargeDestinationFacility", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "dischargeFacility", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "dischargeDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "mrsScore", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "discharge", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioTreatmentPrescribedYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioTreatmentPrescribedNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAntidiabetics", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAntihypertensives", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAntiplatelets", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAnticoagulants", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAnticoagulantPlanned", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedStatin", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "appointmentScheduled", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "smokingCessation", TrustCount: NaN, Verified: false, Value: "", Edited: false},
];


document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('note-editor-textarea') as HTMLTextAreaElement;


    formFields.forEach(field => {
        let formFieldElement = document.getElementById(field.FieldId) as HTMLInputElement | HTMLSelectElement;
        if (formFieldElement) {
            formFieldElement.value = field.Value;

            if (formFieldElement.type === 'radio') {
                if ("checked" in formFieldElement) {
                    formFieldElement.checked = field.Value === 'true';
                }
            }
            if (formFieldElement.type === 'checkbox') {
                if ("checked" in formFieldElement) {
                    formFieldElement.checked = field.Value === 'true';
                }
            }
        }
    });

    formFields.forEach(field => {
        let formFieldElement = document.getElementById(field.FieldId) as HTMLInputElement | HTMLSelectElement;
        if (formFieldElement) {
            formFieldElement.addEventListener('change', (event) => {
                let changedValue = (event.target as HTMLInputElement).value;

                if (formFieldElement.type === 'radio') {
                    if ("checked" in (event.target as HTMLInputElement)) {
                        field.Value = (event.target as HTMLInputElement).checked.toString();
                        formFieldElement.value = field.Value;

                        formFields.forEach(otherField => {
                            if (
                                otherField.FieldId !== field.FieldId &&
                                otherField.FieldId.startsWith(formFieldElement.name)
                            ) {
                                otherField.Value = 'false';
                                let otherFormFieldElement = document.getElementById(otherField.FieldId) as HTMLInputElement;
                                otherFormFieldElement.value = otherField.Value;
                            }
                        });
                    }
                }
                else if (formFieldElement.type === 'checkbox') {
                    if ("checked" in formFieldElement) {
                        field.Value = formFieldElement.checked.toString();
                    }
                }
                else {
                    field.Value = changedValue;
                }
            });
        }
    });

    function updateTextareaHeight() {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    textarea.addEventListener('input', updateTextareaHeight);
    window.addEventListener('load', updateTextareaHeight);


    const divWakeUp = document.getElementById("wakeUpDiv");

    const radioWakeUpStrokeCheck = document.getElementById("wakeUpStrokeCheck") as HTMLInputElement;
    const radioWakeUpDateVerification = document.getElementById("wakeUpDateVerification") as HTMLInputElement;
    radioWakeUpStrokeCheck.addEventListener("change", function() {
        if (this.checked) {
            divWakeUp.style.display = "grid";
            radioWakeUpDateVerification.style.display = 'flex';
        }
    });

    const radioWakeUpStrokeUnChecked = document.getElementById("wakeUpStrokeUnCheck") as HTMLInputElement;
    radioWakeUpStrokeUnChecked.addEventListener("change", function() {
        if (this.checked) {
            divWakeUp.style.display = "none";
            radioWakeUpDateVerification.style.display = 'none';
        }
    });

    const divStroke = document.getElementById("strokeDiv");

    const radioStrokeChecked = document.getElementById("strokeCheck") as HTMLInputElement;
    radioStrokeChecked.addEventListener("change", function() {
        if (this.checked) {
            divStroke.style.display = "grid";
        }
    });

    const radioStrokeUnChecked = document.getElementById("strokeUnCheck") as HTMLInputElement;
    radioStrokeUnChecked.addEventListener("change", function() {
        if (this.checked) {
            divStroke.style.display = "none";
        }
    });

    const radioButtonsMedicalHistory = document.querySelectorAll<HTMLInputElement>('input[name="radioMedicalHistory"]');
    const divMedicalHistory = document.getElementById('checkBoxMedicalHistory') as HTMLDivElement;

    radioButtonsMedicalHistory.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioMedicalHistoryNone' || this.id === 'radioMedicalHistoryUnknown') && this.value === 'true') {
                divMedicalHistory.style.display = 'none';
            } else if (this.value === 'true') {
                divMedicalHistory.style.display = 'flex';
            }
        });
    });

    const radioButtonsTreatment = document.querySelectorAll<HTMLInputElement>('input[name="radioTreatment"]');
    const divTreatment = document.getElementById('checkBoxTreatment') as HTMLDivElement;

    radioButtonsTreatment.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioTreatmentNone' || this.id === 'radioTreatmentUnknown') && this.value === 'true') {
                divTreatment.style.display = 'none';
            } else if (this.value === 'true') {
                divTreatment.style.display = 'flex';
            }
        });
    });

    const glucoseInput = document.getElementById('glucose') as HTMLInputElement;
    const nullButtonGlucose = document.getElementById('nullButtonGlucose') as HTMLButtonElement;

    nullButtonGlucose.addEventListener('click', () => {
        glucoseInput.value = '';
        const fieldToUpdate = formFields.find(field => field.FieldId === glucoseInput.id);

        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });

    const cholesterolInput = document.getElementById('cholesterol') as HTMLInputElement;
    const nullButtonholeCholesterol = document.getElementById('nullButtonCholesterol') as HTMLButtonElement;

    nullButtonholeCholesterol.addEventListener('click', () => {
        cholesterolInput.value = '';

        const fieldToUpdate = formFields.find(field => field.FieldId === cholesterolInput.id);

        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });

    const mrsInput = document.getElementById('mrs') as HTMLInputElement;
    const nullButtonholeMrs = document.getElementById('nullButtonMrs') as HTMLButtonElement;

    nullButtonholeMrs.addEventListener('click', () => {
        mrsInput.value = '';

        const fieldToUpdate = formFields.find(field => field.FieldId === mrsInput.id);

        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });

    const nihssInput = document.getElementById('nihss') as HTMLInputElement;
    const nullButtonholeNihss = document.getElementById('nullButtonNihss') as HTMLButtonElement;

    nullButtonholeNihss.addEventListener('click', () => {
        nihssInput.value = '';

        const fieldToUpdate = formFields.find(field => field.FieldId === nihssInput.id);

        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });

    const radioButtonsInfarcts = document.querySelectorAll<HTMLInputElement>('input[name="radioInfarcts"]');
    const divInfarcts = document.getElementById('checkBoxInfarcts') as HTMLDivElement;

    radioButtonsInfarcts.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'infarctsNo') && this.value === 'true') {
                divInfarcts.style.display = 'none';
            } else if (this.value === 'true') {
                divInfarcts.style.display = 'flex';
            }
        });
    });

    const radioButtonsArterial = document.querySelectorAll<HTMLInputElement>('input[name="radioArterial"]');
    const divArterial = document.getElementById('checkBoxArterial') as HTMLDivElement;

    radioButtonsArterial.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioArterialNo') && this.value === 'true') {
                divArterial.style.display = 'none';
            } else if (this.value === 'true') {
                divArterial.style.display = 'flex';
            }
        });
    });

    const divThrombolysisSelect = document.getElementById("thrombolysisSelectDiv");
    const divThrombolysis = document.getElementById("thrombolysisDiv");
    const thrombolysisCheckDiv = document.getElementById("thrombolysisCheckDiv");
    const radioThrombolysisCheck = document.getElementById("thrombolysisCheck") as HTMLInputElement;
    radioThrombolysisCheck.addEventListener("change", function() {
        if (this.checked) {
            divThrombolysisSelect.style.display = "none";
            divThrombolysis.style.display = "none";
            thrombolysisCheckDiv.style.display = "flex";
        }
    });

    const radioThrombolysisUnChecked = document.getElementById("thrombolysisUnCheck") as HTMLInputElement;
    radioThrombolysisUnChecked.addEventListener("change", function() {
        if (this.checked) {
            divThrombolysisSelect.style.display = "grid";
            divThrombolysis.style.display = "flex";
            thrombolysisCheckDiv.style.display = "none";
        }
    });

    const divThrombectomy = document.getElementById("thrombectomyDiv");
    const divThrombectomyTime = document.getElementById("thrombectomyTimeDiv");
    const thrombectomyDiv = document.getElementById("thrombectomyCheckDiv");
    const radioThrombectomyCheck = document.getElementById("thrombectomyCheck") as HTMLInputElement;
    radioThrombectomyCheck.addEventListener("change", function() {
        if (this.checked) {
            divThrombectomy.style.display = "none";
            divThrombectomyTime.style.display = "none";
            thrombectomyDiv.style.display = "flex";
        }
    });

    const radioThrombectomyUnCheck = document.getElementById("thrombectomyUnCheck") as HTMLInputElement;
    radioThrombectomyUnCheck.addEventListener("change", function() {
        if (this.checked) {
            divThrombectomy.style.display = "grid";
            divThrombectomyTime.style.display = "block";
            thrombectomyDiv.style.display = "none";
        }
    });

    const radioButtonsThrombectomy = document.querySelectorAll<HTMLInputElement>('input[name="radioComplicationThrombectomy"]');
    const divThrombectomys = document.getElementById('checkBoxThrombectomy') as HTMLDivElement;

    radioButtonsThrombectomy.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioComplicationThrombectomyNo') && this.value === 'true') {
                divThrombectomys.style.display = 'none';
            } else if (this.value === 'true') {
                divThrombectomys.style.display = 'flex';
            }
        });
    });

    const radioButtonsBleedingReason = document.querySelectorAll<HTMLInputElement>('input[name="radioBleedingReason"]');
    const divBleedingReason = document.getElementById('checkBoxBleedingReason') as HTMLDivElement;

    radioButtonsBleedingReason.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioBleedingReasonNo') && this.value === 'true') {
                divBleedingReason.style.display = 'none';
            } else if (this.value === 'true') {
                divBleedingReason.style.display = 'flex';
            }
        });
    });

    const radioButtonsNeurosurgery = document.querySelectorAll<HTMLInputElement>('input[name="radioNeurosurgery"]');
    const divNeurosurgery = document.getElementById('checkBoxNeurosurgery') as HTMLDivElement;

    radioButtonsNeurosurgery.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioNeurosurgeryNo') && this.value === 'true') {
                divNeurosurgery.style.display = 'none';
            } else if (this.value === 'true') {
                divNeurosurgery.style.display = 'flex';
            }
        });
    });

    const radioButtonsIntervention = document.querySelectorAll<HTMLInputElement>('input[name="radioIntervention"]');
    const divIntervention = document.getElementById('checkBoxIntervention') as HTMLDivElement;

    radioButtonsIntervention.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioInterventionNo') && this.value === 'true') {
                divIntervention.style.display = 'none';
            } else if (this.value === 'true') {
                divIntervention.style.display = 'flex';
            }
        });
    });

    const radioButtonsTreatmentPerformed = document.querySelectorAll<HTMLInputElement>('input[name="radioTreatmentPerformed"]');
    const divTreatmentPerformed = document.getElementById('checkBoxTreatmentPerformed') as HTMLDivElement;

    radioButtonsTreatmentPerformed.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioTreatmentPerformedNo') && this.value === 'true') {
                divTreatmentPerformed.style.display = 'none';
            } else if (this.value === 'true') {
                divTreatmentPerformed.style.display = 'flex';
            }
        });
    });

    const divThrombolysisMimic = document.getElementById("strokeMimicDiv");
    const radioThrombolysisMimicCheck = document.getElementById("thrombolysisMimicCheck") as HTMLInputElement;
    radioThrombolysisMimicCheck.addEventListener("change", function() {
        if (this.checked) {
            divThrombolysisMimic.style.display = "flex";
        }
    });

    const radioThrombolysisMimicUnChecked = document.getElementById("thrombolysisMimicUnCheck") as HTMLInputElement;
    radioThrombolysisMimicUnChecked.addEventListener("change", function() {
        if (this.checked) {
            divThrombolysisMimic.style.display = "none";
        }
    });

    const radioButtonsTreatmentPrescribed = document.querySelectorAll<HTMLInputElement>('input[name="radioTreatmentPrescribed"]');
    const divTreatmentPrescribed = document.getElementById('checkBoxTreatmentPrescribed') as HTMLDivElement;

    radioButtonsTreatmentPrescribed.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioTreatmentPrescribedNo') && this.value === 'true') {
                divTreatmentPrescribed.style.display = 'none';
            } else if (this.value === 'true') {
                divTreatmentPrescribed.style.display = 'flex';
            }
        });
    });
 /*
    inputElement.addEventListener("invalid", () => {
        applyInvalidStyle(inputElement);
    });

    inputElement.addEventListener("input", () => {
        if (inputElement.checkValidity()) {
            removeInvalidStyle(inputElement);
        }
    });

    selectElement.addEventListener("invalid", () => {
        applyInvalidStyle(selectElement);
    });

    selectElement.addEventListener("change", () => {
        if (selectElement.checkValidity()) {
            removeInvalidStyle(selectElement);
        }
    });*/

    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            const editedSpan = document.getElementById(input.id + 'Edited');
            const percentageSpan = document.getElementById(input.id + 'Percentage');
            editedSpan.style.display = 'inline';
            percentageSpan.style.display = 'none';
        });
    });

    const selects = document.querySelectorAll('select');

    selects.forEach((select) => {
        select.addEventListener('change', () => {
            const editedSpan = document.getElementById(select.id + 'Edited');
            const percentageSpan = document.getElementById(select.id + 'Percentage');
            editedSpan.style.display = 'inline';
            percentageSpan.style.display = 'none';
        });
    });

    document.getElementById("agePercentage").innerText = formFields.find(o => o.FieldId == 'age').TrustCount.toString() + " %";
    document.getElementById("sexPercentage").innerText = formFields.find(o => o.FieldId == 'sex').TrustCount.toString() + " %";
    document.getElementById("wakeUpDatePercentage").innerText = formFields.find(o => o.FieldId == 'wakeUpDate').TrustCount.toString() + " %";

    const allFormFields = document.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select');
    allFormFields.forEach((field) => {
        triggerChangeEvent(field);
    });
});

function changeColor(): void {
    const inputElement = document.getElementById("age") as HTMLInputElement;
    applyWarningStyle(inputElement);
}

function resetColor(): void {
    const inputElement = document.getElementById("age") as HTMLInputElement;
    removeWarningStyle(inputElement);
}

function applyWarningStyle(element: HTMLElement): void {
    element.style.backgroundColor = "#FF8200";
    element.style.color = "var(--grey-900)";
}

function removeWarningStyle(element: HTMLElement): void {
    element.style.backgroundColor = "";
    element.style.color = "";
}

function toggleDivImaging(value: string) {
    const divs = document.querySelectorAll("[id^='imagingDiv']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i] as HTMLElement;
        div.style.display = "none";
    }

    const selectedDiv = document.getElementById("imagingDiv" + value);
    if (selectedDiv) {
        selectedDiv.style.display = "flex";
    }
}

function toggleSubDiv(value: string) {
    const divs = document.querySelectorAll("[id^='imagingSubDiv']");
    const imagingDiv = document.getElementById("imagingDiv");
    const infarctsDiv = document.getElementById("infarctsDiv");
    const perfusionDeficitDiv = document.getElementById("perfusionDeficitDiv");

    for (let i = 0; i < divs.length; i++) {
        const div = divs[i] as HTMLElement;
        div.style.display = "block";
        imagingDiv.style.display = "block";
        infarctsDiv.style.display = "block";
        perfusionDeficitDiv.style.display = "none";
    }

    const selectedDiv = document.getElementById("imagingSubDiv");
    if (value == "1" || value == "4" || value == "7" || value == "8") {
        selectedDiv.style.display = "none";
    }
    if (value == "8") {
        imagingDiv.style.display = "none";
        infarctsDiv.style.display = "none";
    }

    if (value == "3" || value == "6") {
        perfusionDeficitDiv.style.display = "flex";
    }
}

function mticiToggle(value: string) {
    const divs = document.querySelectorAll("[id^='mticiDiv']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i] as HTMLElement;
        div.style.display = "block";
    }

    const selectedDiv = document.getElementById("mticiDiv");
    if (value == "0") {
        selectedDiv.style.display = "none";
    }
}

function thrombolysisTimeToggle(value: string) {
    const divs = document.querySelectorAll("[id^='thrombolysisDiv']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i] as HTMLElement;
        div.style.display = "none";
    }

    const selectedDiv = document.getElementById("thrombolysisDiv");
    if (value == "6") {
        selectedDiv.style.display = "block";
    }
}

function thrombectomyTimeToggle(value: string) {
    const divs = document.querySelectorAll("[id^='thrombectomyTimeDiv']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i] as HTMLElement;
        div.style.display = "none";
    }

    const selectedDiv = document.getElementById("thrombectomyTimeDiv");
    if (value == "8") {
        selectedDiv.style.display = "block";
    }
}

function perfusionDeficitToggle(value: string) {
    const divs = document.querySelectorAll("[id^='perfusionDeficit']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i] as HTMLElement;
        div.style.display = "flex";
    }

    const selectedDiv = document.getElementById("perfusionDeficit");
    if (value == "4" || value == "5") {
        selectedDiv.style.display = "none";
    }
}

function dischargeDestinationToggle(value: string) {
    const withinDiv = document.getElementById("withinTransferred");
    const transferredDiv = document.getElementById("centerTransferred");
    withinDiv.style.display = "none";
    transferredDiv.style.display = "none";


    if (value == "2") {
        withinDiv.style.display = "block";
    }
    if (value == "3") {
        transferredDiv.style.display = "block";
    }
}

function triggerChangeEvent(element: HTMLElement) {
    const event = new Event('change', { bubbles: true });
    element.dispatchEvent(event);
}

function toggleVerification(id: string) {
    document.getElementById("verify-"+ id).style.display = "none";
    document.getElementById("edit-"+ id).style.display = "inline";
    (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = true;
}

function toggleEdit(id: string) {
    document.getElementById("verify-"+ id).style.display = "inline";
    document.getElementById("edit-"+ id).style.display = "none";
    (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = false;
}

