import {mapper} from "./Mapper.js";
import jsonData from './reports/FNM-discharge-report-1.cs.json' assert {type: 'json'};

interface formField {
    highLights: highLight[];
    FieldId: string;
    TrustCount: number;
    Verified: boolean;
    Value: string;
    Edited: boolean;
}

interface highLight {
    Index: number,
    Length: number
}

const allFormFields = document.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select');

let switchForm: boolean = true;

(window as any).changeColor = changeColor;
(window as any).resetColor  = resetColor ;
(window as any).applyWarningStyle  = applyWarningStyle ;
(window as any).removeWarningStyle  = removeWarningStyle ;
(window as any).toggleDivImaging  = toggleDivImaging ;
(window as any).toggleSubDiv  = toggleSubDiv ;
(window as any).thrombolysisTimeToggle  = thrombolysisTimeToggle ;
(window as any).thrombectomyTimeToggle  = thrombectomyTimeToggle ;
(window as any).perfusionDeficitToggle  = perfusionDeficitToggle ;
(window as any).dischargeDestinationToggle  = dischargeDestinationToggle ;
(window as any).triggerChangeEvent  = triggerChangeEvent ;
(window as any).toggleVerification  = toggleVerification ;
(window as any).toggleEdit  = toggleEdit ;
(window as any).mticiToggle  = mticiToggle ;
(window as any).formSwitch  = formSwitch ;
(window as any).exportData  = exportData ;

let formFields: formField[] = [
    { highLights: [{Index: 4000, Length: 100},{Index: 25, Length: 10}], FieldId: "age", TrustCount: 100, Verified: false, Value: "20", Edited: false},
    { highLights: [], FieldId: "sex", TrustCount: 50, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "wakeUpStrokeCheck", TrustCount: 80, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "wakeUpStrokeUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "wakeUpDate", TrustCount: 80, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "strokeCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "strokeUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "firstAttented", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "arrivalDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "arrivalTime", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "onsetDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "onsetTime", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "arrivedFrom", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "hospitalizedIn", TrustCount: NaN, Verified: false, Value: "2", Edited: false},
    { highLights: [], FieldId: "department", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioMedicalHistoryYes", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "radioMedicalHistoryNone", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioMedicalHistoryUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryHypertension", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryDiabetes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryHyperlipidemia", TrustCount: 78, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryActiveSmoker", TrustCount: 45, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryPreviousIschemic", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryPreviousHemorrhage", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryAtrialFibrillation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryCoronaryArtery", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryCongestiveHeartFailure", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryHIV", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxMedicalHistoryCOVIDPositive", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioTreatmentEventYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioTreatmentEventNone", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioTreatmentEventUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentEventAntidiabetics", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentEventAntihypertensives", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentEventAntiplatelets", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentEventAnticoagulants", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentEventHormonalContraception", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentEventStatin", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "glucose", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "cholesterol", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "systolic", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "diastolic", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "nihss", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "mrs", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "firstInrTesting", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "coma", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "brainImaging", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "imagingDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "imagingTime", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioInfarctsYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioInfarctsNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxInfarctsCortical", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxInfarctsSubCortical", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxBrainstem", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "strokeType", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "aspectScore", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioArterialYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioArterialNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialMCA1Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialMCA2Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialMCA3Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialACA", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialPCA1Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialPCA2Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialCEALeft", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialCIALeft", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialVertebral", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialMCA1Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialMCA2Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialMCA3Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialACARight", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialPCA1Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialPCA2Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialCEARight", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialCIARight", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxArterialBasilar", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioThrombolysisCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioThrombolysisUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "thrombolysisReason", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "thrombolysisDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "drugUsed", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioAnticoagulantYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioAnticoagulantNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "treatmentDose", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "bolusDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "thrombolysisGiven", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "thrombectomyCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "thrombectomyUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "thrombectomyReason", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "thrombectomyDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "groinDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "mTICIScore", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "reperfusionDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioThrombectomyYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioThrombectomyNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxThrombectomyVesselPerforation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxThrombectomyDissection", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxThrombectomyEmbolization", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxThrombectomyHematoma", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxThrombectomyOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "bleedingVolume", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "infratentorialCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "infratentorialUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "bleedingCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "bleedingUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "intraventricularCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "intraventricularUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "radioBleedingReasonYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioBleedingReasonNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxBleedingReasonArterialHypertension", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxBleedingReasonAneurysm", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxBleedingReasonArteriovenousMalformation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxBleedingReasonAnticoagulationTherapy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxBleedingReasonAmyloidAngiopathy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxBleedingReasonOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "antidoteAnticoagulants", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioNeurosurgeryYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioNeurosurgeryNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxNeurosurgeryIntracranialHematomaEvacuation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxNeurosurgeryExternalVentricularDrainage", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxNeurosurgeryDecompresiveCraniectomy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "clinicalSymptoms", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "symptomsDuration", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "bleedingSubarachnoidCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "bleedingSubarachnoidUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "huntHess", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioInterventionYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioInterventionNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxInterventionEndovascular", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxInterventionNeurosurgical", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxInterventionVentricularDrainage", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxInterventionDecompressiveCraniectomy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxInterventionOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "nimodipineTreatment", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioTreatmentPerformedYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioTreatmentPerformedNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPerformedAnticoagulation", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPerformedThrombectomy", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPerformedThrombolysis", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPerformedNeurosurgical", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioThrombolysisMimicCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioThrombolysisMimicUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { highLights: [], FieldId: "drugUsedThrombolysis", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioAnticoagulantMimicsYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioAnticoagulantMimicsNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "treatmentDoseMimics", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "bolusMimicDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "finalDiagnosis", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "ctmrPerfusion", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "coreVolume", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "hypoperfusionVolume", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "dischargeDestination", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "dischargeDestinationFacility", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "dischargeFacility", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "dischargeDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "mrsScore", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "discharge", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioTreatmentPrescribedYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioTreatmentPrescribedNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAntidiabetics", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAntihypertensives", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAntiplatelets", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAnticoagulants", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAnticoagulantPlanned", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedStatin", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "appointmentScheduled", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "smokingCessation", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "hospitalised24Hour", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioVentilated", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioVentilatedYes", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioVentilatedNo", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioCraniectomy", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioCraniectomyYes", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioCraniectomyNo", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioThromboembolismYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioThromboembolismNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxThromboembolismUFH", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxThromboembolismLMWH", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxThromboembolismIPC", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxThromboembolismGCS", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxThromboembolismVTE", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxThromboembolismVFP", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxThromboembolismXaVTE", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxThromboembolismOther", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "radioStrokeCompYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioStrokeCompNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "radioStrokeCompUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { highLights: [], FieldId: "checkBoxStrokeCompPneumonia", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxStrokeCompDVT", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxStrokeCompPulmonary", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxStrokeCompUrinary", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxStrokeCompSores", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxStrokeCompSepsis", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxStrokeCompRecurrence", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { highLights: [], FieldId: "checkBoxStrokeCompOther", TrustCount: NaN, Verified: false, Value: "", Edited: false},
];

declare var Quill: any;

class HighlightBlot extends Quill.import('blots/inline') {
    static blotName = 'highlight';
    static tagName = 'span';
    static className = 'highlight';
}

Quill.register(HighlightBlot.blotName);

let quill = new Quill('#note-editor-textarea', {
    modules: {
        syntax: true,
        toolbar: false
    },
    theme: 'snow'
});

const updateListValuesFromJson = () => {
    // Iterate over the listData
    for (const item of formFields) {
        // Find the corresponding JSON name from the mapper list
        const mappedItem = mapper.find((mapItem) => mapItem.FormId === item.FieldId);
        if (mappedItem) {
            const { docMarkerId } = mappedItem;
            // Check if the _formData property exists in the JSON data
            if (jsonData.hasOwnProperty('_formData')) {
                // Access the nested property within _formData
                const formData = jsonData['_formData'];
                // Check if the object with the mapped name exists in the nested JSON data
                if (formData.hasOwnProperty(docMarkerId)) {
                    // Update the value in the list with the value from the nested JSON data
                    item.Value = formData[docMarkerId].toString();
                }
            }
        }
    }
};
// Call the function to update the list values from JSON
updateListValuesFromJson();

const displayReportText = () => {
    const reportText = jsonData._reportText;
    const textAreaElement = document.getElementById('note-editor-textarea');
    quill.setContents([
        { insert: reportText }
    ]);

    //textAreaElement.innerText = reportText;
}

displayReportText();
let index: number = 0;
let fieldId: string = '';

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('note-editor-textarea');

    formFields.forEach(field => {
        let formFieldElement = document.getElementById(field.FieldId) as HTMLInputElement | HTMLSelectElement;
        if (formFieldElement) {
            const regex: RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
            if (regex.test(field.Value)) {
                if (formFieldElement.type == "date" ) {
                    formFieldElement.value = field.Value.split('T')[0];
                } else {
                    const timeArray = field.Value.split('T')[1].split(':'); // will return ['HH', 'MM', 'SS']
                    formFieldElement.value = `${timeArray[0]}:${timeArray[1]}`;
                }
            } else {
                if (formFieldElement.type === 'radio') {
                    if ("checked" in formFieldElement) {
                        if (field.FieldId.endsWith('UnCheck')) {
                            formFieldElement.checked = field.Value == "false";
                        } else if (field.FieldId.endsWith('No')) {
                            formFieldElement.checked = field.Value == "false";
                        } else if (field.FieldId.endsWith('None')) {
                            formFieldElement.checked = field.Value == "false";
                        } else if (field.FieldId.endsWith('Unknown')) {
                            formFieldElement.checked = field.Value != "false" && field.Value != "true";
                        } else {
                            formFieldElement.checked = field.Value === "true";
                        }                    }
                }
                else if (formFieldElement.type === 'checkbox') {
                    if ("checked" in formFieldElement) {
                        formFieldElement.checked = field.Value === 'true';
                    }
                } else {
                    formFieldElement.value = field.Value;
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

    formSwitch();
    /*function updateTextareaHeight() {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    textarea.addEventListener('input', updateTextareaHeight);
    window.addEventListener('load', updateTextareaHeight);*/

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

    const radioButtonsTreatment = document.querySelectorAll<HTMLInputElement>('input[name="radioTreatmentEvent"]');
    const divTreatment = document.getElementById('checkBoxTreatment') as HTMLDivElement;

    radioButtonsTreatment.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioTreatmentEventNone' || this.id === 'radioTreatmentEventUnknown') && this.value === 'true') {
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
            if ((this.id === 'radioInfarctsNo') && this.value === 'true') {
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
    const radioThrombolysisCheck = document.getElementById("radioThrombolysisCheck") as HTMLInputElement;
    radioThrombolysisCheck.addEventListener("change", function() {
        if (this.checked) {
            divThrombolysisSelect.style.display = "none";
            divThrombolysis.style.display = "none";
            thrombolysisCheckDiv.style.display = "flex";
        }
    });

    const radioThrombolysisUnChecked = document.getElementById("radioThrombolysisUnCheck") as HTMLInputElement;
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
    const radioThrombolysisMimicCheck = document.getElementById("radioThrombolysisMimicCheck") as HTMLInputElement;
    radioThrombolysisMimicCheck.addEventListener("change", function() {
        if (this.checked) {
            divThrombolysisMimic.style.display = "flex";
        }
    });

    const radioThrombolysisMimicUnChecked = document.getElementById("radioThrombolysisMimicUnCheck") as HTMLInputElement;
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

    const radioButtonsThromboemolism = document.querySelectorAll<HTMLInputElement>('input[name="radioThromboembolism"]');
    const divThromboemolism = document.getElementById('checkBoxThromboembolism') as HTMLDivElement;

    radioButtonsThromboemolism.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioThromboembolismNo') && this.value === 'true') {
                divThromboemolism.style.display = 'none';
            } else if (this.value === 'true') {
                divThromboemolism.style.display = 'flex';
            }
        });
    });

    const radioButtonsComplications = document.querySelectorAll<HTMLInputElement>('input[name="radioStrokeComp"]');
    const divComplications = document.getElementById('checkBoxStrokeComp') as HTMLDivElement;

    radioButtonsComplications.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radioStrokeCompNo' || this.id === 'radioStrokeCompUnknown') && this.value === 'true') {
                divComplications.style.display = 'none';
            } else if (this.value === 'true') {
                divComplications.style.display = 'flex';
            }
        });
    });

    const inputs = document.querySelectorAll('input:not([type="checkbox"]), select');

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            const editedSpan = document.getElementById(input.id.replace(/(Check|UnCheck|Yes|None|Unknown|No)$/, '') + 'Edited');
            const percentageSpan = document.getElementById(input.id.replace(/(Check|UnCheck|Yes|None|Unknown|No)$/, '') + 'Percentage');
            editedSpan.style.display = 'inline';
            percentageSpan.style.display = 'none';
        });
    });

    inputs.forEach(input => {
        input.addEventListener('click', () => {
            const highLights = formFields.find(o => o.FieldId == input.id).highLights;
            if (highLights.length != 0) {
                if (fieldId == input.id) {
                    index++
                    if (index >= highLights.length) {
                        index = 0
                    }
                } else {
                    index = 0;
                    fieldId = input.id;
                }

                highlightText(highLights[index].Index, highLights[index].Length);
            }
        });
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkboxNames: string[] = ['Arterial','MedicalHistory','TreatmentEvent', 'Infarcts','Thrombectomy', 'BleedingReason', 'Neurosurgery', 'Intervention', 'TreatmentPerformed', 'TreatmentPrescribed']

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('input', () => {
            checkboxNames.forEach((name) => {
                if (checkbox.id.includes(name)) {
                    const editedSpan = document.getElementById('radio' + name + 'Edited');
                    const percentageSpan = document.getElementById('radio' + name + 'Percentage');
                    editedSpan.style.display = 'inline';
                    percentageSpan.style.display = 'none';
                    document.getElementById(checkbox.id + 'Percentage').innerText = '';
                    document.getElementById('radio' + name + 'Yes' + 'Percentage').innerText = '';

                    document.getElementById('radio' + name + 'No' + 'Percentage') != null ? document.getElementById('radio' + name + 'No' + 'Percentage').innerText = '' : null;
                    document.getElementById('radio' + name + 'None' + 'Percentage') != null ? document.getElementById('radio' + name + 'None' + 'Percentage').innerText = '' : null;
                    document.getElementById('radio' + name + 'Unknown' + 'Percentage') != null ? document.getElementById('radio' + name + 'Unknown' + 'Percentage').innerText = '' : null;
                }
            });
        });
    });

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
    const imagingDiv = document.getElementById("imagingDateDone");
    const imagingDateVerification = document.getElementById("imagingDateVerification");
    const infarctsDiv = document.getElementById("infarctsDiv");
    const perfusionDeficitDiv = document.getElementById("perfusionDeficitDiv");

    for (let i = 0; i < divs.length; i++) {
        const div = divs[i] as HTMLElement;
        div.style.display = "block";
        imagingDiv.style.display = "block";
        imagingDateVerification.style.display = "flex";
        infarctsDiv.style.display = "block";
        perfusionDeficitDiv.style.display = "none";
    }

    const selectedDiv = document.getElementById("imagingSubDiv");
    if (value == "ct" || value == "mr" || value == "elsewhere" || value == "not_done") {
        selectedDiv.style.display = "none";
    }
    if (value == "not_done") {
        imagingDiv.style.display = "none";
        imagingDateVerification.style.display = "none";
        infarctsDiv.style.display = "none";
    }

    if (value == "cta_perf" || value == "mra_perf") {
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
    if (value == "transferred") {
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
    if (value == "transferred") {
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
    if (value == "bilateral_stenosis" || value == "no_deficit") {
        selectedDiv.style.display = "none";
    }
}

function dischargeDestinationToggle(value: string) {
    const withinDiv = document.getElementById("withinTransferred");
    const transferredDiv = document.getElementById("centerTransferred");
    withinDiv.style.display = "none";
    transferredDiv.style.display = "none";


    if (value == "same_center") {
        withinDiv.style.display = "block";
    }
    if (value == "another_center") {
        transferredDiv.style.display = "block";
    }
}

function triggerChangeEvent(element: HTMLElement) {
    const event = new Event('change', { bubbles: true });
    element.dispatchEvent(event);
}

function toggleVerification(id: string, ids: string[] = [], checkBoxIds: string [] = []) {
    document.getElementById("verify-"+ id).style.display = "none";
    document.getElementById("edit-"+ id).style.display = "inline";
    if (ids && ids.length > 0) {
        for (let id of ids) {
            (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = true;
            formFields.find(o => o.FieldId == id).Verified = true;
        }
        if (checkBoxIds && checkBoxIds.length > 0) {
            for (let checkBoxId of checkBoxIds) {
                (document.getElementById(checkBoxId) as HTMLInputElement | HTMLSelectElement).disabled = true;
                formFields.find(o => o.FieldId == checkBoxId).Verified = true;
            }
        }
    } else {
        (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = true;
        formFields.find(o => o.FieldId == id).Verified = true;
    }
}

function toggleEdit(id: string, ids: string[] = [], checkBoxIds: string [] = []) {
    document.getElementById("verify-"+ id).style.display = "inline";
    document.getElementById("edit-"+ id).style.display = "none";
    if (ids && ids.length > 0) {
        for (let id of ids) {
            (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = false;
            formFields.find(o => o.FieldId == id).Edited = true;
        }
        if (checkBoxIds && checkBoxIds.length > 0) {
            for (let checkBoxId of checkBoxIds) {
                (document.getElementById(checkBoxId) as HTMLInputElement | HTMLSelectElement).disabled = false;
                formFields.find(o => o.FieldId == checkBoxId).Edited = true;
            }
        }
    } else {
        (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = false;
        formFields.find(o => o.FieldId == id).Edited = true;
    }
}

function colorPercentage(percentage: number): string {
    if (percentage >= 75) {
        return 'var(--green)';
    } else if (percentage >= 25) {
        return  'var(--yellow)';
    } else {
        return  'var(--warning)';
    }
}

function formSwitch() {
    switchForm = !switchForm;
    formFields.forEach(o => {
        const element = document.getElementById(o.FieldId + 'Percentage');
        if (element) {
            if (!switchForm) {
                element.innerText = o.TrustCount.toString() + " %";
                if (element.id.includes('checkBox') || element.id.includes('radio')) {
                    element.style.backgroundColor = "";
                } else {
                    element.parentElement.style.backgroundColor = "";
                }
            } else {
                element.innerText = "";
                if (element.id.includes('checkBox') || element.id.includes('radio')) {
                    element.style.backgroundColor = colorPercentage(o.TrustCount);
                } else {
                    element.parentElement.style.backgroundColor = colorPercentage(o.TrustCount);
                }
            }
        }
    });

    if (!switchForm) {
        document.getElementById("strokePercentage").innerText = [formFields.find(o => o.FieldId === 'strokeCheck').TrustCount, formFields.find(o => o.FieldId === 'strokeUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("wakeUpStrokePercentage").innerText = [formFields.find(o => o.FieldId === 'wakeUpStrokeCheck').TrustCount, formFields.find(o => o.FieldId === 'wakeUpStrokeUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("bleedingSubarachnoidPercentage").innerText = [formFields.find(o => o.FieldId === 'bleedingSubarachnoidCheck').TrustCount, formFields.find(o => o.FieldId === 'bleedingSubarachnoidUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("radioThrombolysisMimicPercentage").innerText = [formFields.find(o => o.FieldId === 'radioThrombolysisMimicCheck').TrustCount, formFields.find(o => o.FieldId === 'radioThrombolysisMimicUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("radioThrombolysisPercentage").innerText = [formFields.find(o => o.FieldId === 'radioThrombolysisCheck').TrustCount, formFields.find(o => o.FieldId === 'radioThrombolysisUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("radioAnticoagulantPercentage").innerText = [formFields.find(o => o.FieldId === 'radioAnticoagulantYes').TrustCount, formFields.find(o => o.FieldId === 'radioAnticoagulantNo').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("thrombectomyPercentage").innerText = [formFields.find(o => o.FieldId === 'thrombectomyCheck').TrustCount, formFields.find(o => o.FieldId === 'thrombectomyUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("infratentorialPercentage").innerText = [formFields.find(o => o.FieldId === 'infratentorialCheck').TrustCount, formFields.find(o => o.FieldId === 'infratentorialUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("bleedingPercentage").innerText = [formFields.find(o => o.FieldId === 'bleedingCheck').TrustCount, formFields.find(o => o.FieldId === 'bleedingUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("intraventricularPercentage").innerText = [formFields.find(o => o.FieldId === 'intraventricularCheck').TrustCount, formFields.find(o => o.FieldId === 'intraventricularUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("bleedingSubarachnoidPercentage").innerText = [formFields.find(o => o.FieldId === 'radioAnticoagulantMimicsNo').TrustCount, formFields.find(o => o.FieldId === 'radioAnticoagulantMimicsYes').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("radioVentilatedPercentage").innerText = [formFields.find(o => o.FieldId === 'radioVentilatedYes').TrustCount, formFields.find(o => o.FieldId === 'radioVentilatedNo').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";
        document.getElementById("radioCraniectomyPercentage").innerText = [formFields.find(o => o.FieldId === 'radioCraniectomyYes').TrustCount, formFields.find(o => o.FieldId === 'radioCraniectomyNo').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() + '%' || "";

        document.getElementById("strokePercentage").parentElement.style.backgroundColor = "";
        document.getElementById("wakeUpStrokePercentage").parentElement.style.backgroundColor = "";
        document.getElementById("bleedingSubarachnoidPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("radioThrombolysisMimicPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("radioThrombolysisPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("radioAnticoagulantPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("thrombectomyPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("infratentorialPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("bleedingPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("intraventricularPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("bleedingSubarachnoidPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("radioVentilatedPercentage").parentElement.style.backgroundColor = "";
        document.getElementById("radioCraniectomyPercentage").parentElement.style.backgroundColor = "";

    } else {
        document.getElementById("strokePercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'strokeCheck').TrustCount, formFields.find(o => o.FieldId === 'strokeUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("wakeUpStrokePercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'wakeUpStrokeCheck').TrustCount, formFields.find(o => o.FieldId === 'wakeUpStrokeUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("bleedingSubarachnoidPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'bleedingSubarachnoidCheck').TrustCount, formFields.find(o => o.FieldId === 'bleedingSubarachnoidUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("radioThrombolysisMimicPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioThrombolysisMimicCheck').TrustCount, formFields.find(o => o.FieldId === 'radioThrombolysisMimicUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("radioThrombolysisPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioThrombolysisCheck').TrustCount, formFields.find(o => o.FieldId === 'radioThrombolysisUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("radioAnticoagulantPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioAnticoagulantYes').TrustCount, formFields.find(o => o.FieldId === 'radioAnticoagulantNo').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("thrombectomyPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'thrombectomyCheck').TrustCount, formFields.find(o => o.FieldId === 'thrombectomyUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("infratentorialPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'infratentorialCheck').TrustCount, formFields.find(o => o.FieldId === 'infratentorialUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("bleedingPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'bleedingCheck').TrustCount, formFields.find(o => o.FieldId === 'bleedingUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("intraventricularPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'intraventricularCheck').TrustCount, formFields.find(o => o.FieldId === 'intraventricularUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("bleedingSubarachnoidPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioAnticoagulantMimicsNo').TrustCount, formFields.find(o => o.FieldId === 'radioAnticoagulantMimicsYes').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("radioVentilatedPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioVentilatedYes').TrustCount, formFields.find(o => o.FieldId === 'radioVentilatedNo').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);
        document.getElementById("radioCraniectomyPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioCraniectomyYes').TrustCount, formFields.find(o => o.FieldId === 'radioCraniectomyNo').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || 0);

        document.getElementById("strokePercentage").innerText = "";
        document.getElementById("wakeUpStrokePercentage").innerText = "";
        document.getElementById("bleedingSubarachnoidPercentage").innerText = "";
        document.getElementById("radioThrombolysisMimicPercentage").innerText = "";
        document.getElementById("radioThrombolysisPercentage").innerText = "";
        document.getElementById("radioAnticoagulantPercentage").innerText = "";
        document.getElementById("thrombectomyPercentage").innerText = "";
        document.getElementById("infratentorialPercentage").innerText = "";
        document.getElementById("bleedingPercentage").innerText = "";
        document.getElementById("intraventricularPercentage").innerText = "";
        document.getElementById("bleedingSubarachnoidPercentage").innerText = "";
        document.getElementById("radioVentilatedPercentage").innerText = "";
        document.getElementById("radioCraniectomyPercentage").innerText = "";
    }
}

function exportData() {
    const now = new Date();
    const formattedDate = now.toISOString().replace(/:/g, '-').replace(/\./g, '-');
    const fileName = `data_${formattedDate}.csv`;

    const data: formField[] = formFields;

    let csvContent = Object.keys(data[0]).join(',') + '\n';
    csvContent += data.map(objectToCsvRow).join('');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
}

function objectToCsvRow(obj: formField): string {
    const values = Object.keys(obj).map(key => obj[key]);
    return values.join(',') + '\n';
}

function highlightText(start: number, length: number) {
    quill.setSelection(start, length);
    quill.format('highlight', true);

    const selection = quill.getSelection();
    selection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}