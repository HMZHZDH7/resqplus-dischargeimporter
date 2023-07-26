import {mapper} from "./Mapper.js";
import jsonData from './reports/FNM-discharge-report-1.cs.json' assert {type: 'json'};

interface formField {
    TextId: string;
    FieldId: string;
    TrustCount: number;
    Verified: boolean;
    Value: string;
    Edited: boolean;
}

let formFields: formField[] = [
    { TextId: "", FieldId: "age", TrustCount: 100, Verified: false, Value: "20", Edited: false},
    { TextId: "", FieldId: "sex", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "wakeUpStrokeCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "wakeUpStrokeUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "wakeUpDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "strokeCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "strokeUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
    { TextId: "", FieldId: "firstAttented", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "arrivalDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "arrivalTime", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "onsetDate", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "onsetTime", TrustCount: NaN, Verified: false, Value: "", Edited: false},
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
    { TextId: "", FieldId: "radioTreatmentEventYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioTreatmentEventNone", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioTreatmentEventUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentEventAntidiabetics", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentEventAntihypertensives", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentEventAntiplatelets", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentEventAnticoagulants", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentEventHormonalContraception", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxTreatmentEventStatin", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
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
    { TextId: "", FieldId: "imagingTime", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioInfarctsYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioInfarctsNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
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
    { TextId: "", FieldId: "radioThrombolysisCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioThrombolysisUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
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
    { TextId: "", FieldId: "radioThrombectomyYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioThrombectomyNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
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
    { TextId: "", FieldId: "radioThrombolysisMimicCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioThrombolysisMimicUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false},
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

    { TextId: "", FieldId: "hospitalised24Hour", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioVentilated", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioVentilatedYes", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioVentilatedNo", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioCraniectomy", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioCraniectomyYes", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "radioCraniectomyNo", TrustCount: NaN, Verified: false, Value: "", Edited: false},

    { TextId: "", FieldId: "radiothromboembolismYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radiothromboembolismNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxthromboembolismUFH", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxthromboembolismLMWH", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxthromboembolismIPC", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxthromboembolismGCS", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxthromboembolismVTE", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxthromboembolismVFP", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxthromboembolismXaVTE", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxthromboembolismOther", TrustCount: NaN, Verified: false, Value: "", Edited: false},

    { TextId: "", FieldId: "radioStrokeCompYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioStrokeCompNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "radioStrokeCompUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false},
    { TextId: "", FieldId: "checkBoxStrokeCompPneumonia", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxStrokeCompDVT", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxStrokeCompPulmonary", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxStrokeCompUrinary", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxStrokeCompSores", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxStrokeCompSepsis", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxStrokeCompRecurrence", TrustCount: NaN, Verified: false, Value: "", Edited: false},
    { TextId: "", FieldId: "checkBoxStrokeCompOther", TrustCount: NaN, Verified: false, Value: "", Edited: false},
];

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
                    item.Value = formData[docMarkerId];
                }
            }
        }
    }
};
// Call the function to update the list values from JSON
updateListValuesFromJson();

const displayReportText = () => {
    const reportText = jsonData._reportText;
    const textAreaElement = document.getElementById('note-editor-textarea') as HTMLTextAreaElement;
    textAreaElement.value = reportText;
}
displayReportText();


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

    const mrsInput = document.getElementById('mrs') as HTMLInputElement;
    const nullButtonholeMrs = document.getElementById('nullButtonMrs') as HTMLButtonElement;

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

    const radioButtonsThromboemolism = document.querySelectorAll<HTMLInputElement>('input[name="radiothromboembolism"]');
    const divThromboemolism = document.getElementById('checkBoxthromboembolism') as HTMLDivElement;

    radioButtonsThromboemolism.forEach((radioButton) => {
        radioButton.addEventListener("change", function() {
            if ((this.id === 'radiothromboembolismNo') && this.value === 'true') {
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

    const inputs = document.querySelectorAll('input:not([type="checkbox"]), select');

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            const editedSpan = document.getElementById(input.id.replace(/(Check|UnCheck|Yes|None|Unknown|No)$/, '') + 'Edited');
            const percentageSpan = document.getElementById(input.id.replace(/(Check|UnCheck|Yes|None|Unknown|No)$/, '') + 'Percentage');
            editedSpan.style.display = 'inline';
            percentageSpan.style.display = 'none';
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

    document.getElementById("agePercentage").innerText = formFields.find(o => o.FieldId == 'age').TrustCount.toString() + " %";
    document.getElementById("sexPercentage").innerText = formFields.find(o => o.FieldId == 'sex').TrustCount.toString() + " %";
    document.getElementById("wakeUpDatePercentage").innerText = formFields.find(o => o.FieldId == 'wakeUpDate').TrustCount.toString() + " %";
    document.getElementById("strokePercentage").innerText = [formFields.find(o => o.FieldId === 'strokeCheck').TrustCount, formFields.find(o => o.FieldId === 'strokeUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("wakeUpStrokePercentage").innerText = [formFields.find(o => o.FieldId === 'wakeUpStrokeCheck').TrustCount, formFields.find(o => o.FieldId === 'wakeUpStrokeUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("firstAttentedPercentage").innerText = formFields.find(o => o.FieldId == 'firstAttented').TrustCount.toString() + " %";
    document.getElementById("arrivalDatePercentage").innerText = formFields.find(o => o.FieldId == 'arrivalDate').TrustCount.toString() + " %";
    document.getElementById("arrivalTimePercentage").innerText = formFields.find(o => o.FieldId == 'arrivalTime').TrustCount.toString() + " %";
    document.getElementById("arrivedFromPercentage").innerText = formFields.find(o => o.FieldId == 'arrivedFrom').TrustCount.toString() + " %";
    document.getElementById("hospitalizedInPercentage").innerText = formFields.find(o => o.FieldId == 'hospitalizedIn').TrustCount.toString() + " %";
    document.getElementById("departmentPercentage").innerText = formFields.find(o => o.FieldId == 'department').TrustCount.toString() + " %";
    document.getElementById("radioMedicalHistoryYesPercentage").innerText = formFields.find(o => o.FieldId === 'radioMedicalHistoryYes').TrustCount.toString() + " %";
    document.getElementById("radioMedicalHistoryNonePercentage").innerText = formFields.find(o => o.FieldId === 'radioMedicalHistoryNone').TrustCount.toString() + " %";
    document.getElementById("radioMedicalHistoryUnknownPercentage").innerText = formFields.find(o => o.FieldId === 'radioMedicalHistoryUnknown').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryHypertensionPercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryHypertension').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryDiabetesPercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryDiabetes').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryHyperlipidemiaPercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryHyperlipidemia').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryActiveSmokerPercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryActiveSmoker').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryPreviousIschemicPercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryPreviousIschemic').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryPreviousHemorrhagePercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryPreviousHemorrhage').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryAtrialFibrillationPercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryAtrialFibrillation').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryCoronaryArteryPercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryCoronaryArtery').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryCongestiveHeartFailurePercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryCongestiveHeartFailure').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryHIVPercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryHIV').TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryCOVIDPositivePercentage").innerText = formFields.find(o => o.FieldId === 'checkBoxMedicalHistoryCOVIDPositive').TrustCount.toString() + " %";
    document.getElementById('radioTreatmentEventYesPercentage').innerText = formFields.find(o => o.FieldId === 'radioTreatmentEventYes').TrustCount.toString() + ' %';
    document.getElementById('radioTreatmentEventNonePercentage').innerText = formFields.find(o => o.FieldId === 'radioTreatmentEventNone').TrustCount.toString() + ' %';
    document.getElementById('radioTreatmentEventUnknownPercentage').innerText = formFields.find(o => o.FieldId === 'radioTreatmentEventUnknown').TrustCount.toString() + ' %';
    document.getElementById('checkBoxTreatmentEventAntidiabeticsPercentage').innerText = formFields.find(o => o.FieldId === 'checkBoxTreatmentEventAntidiabetics').TrustCount.toString() + ' %';
    document.getElementById('checkBoxTreatmentEventAntihypertensivesPercentage').innerText = formFields.find(o => o.FieldId === 'checkBoxTreatmentEventAntihypertensives').TrustCount.toString() + ' %';
    document.getElementById('checkBoxTreatmentEventAntiplateletsPercentage').innerText = formFields.find(o => o.FieldId === 'checkBoxTreatmentEventAntiplatelets').TrustCount.toString() + ' %';
    document.getElementById('checkBoxTreatmentEventAnticoagulantsPercentage').innerText = formFields.find(o => o.FieldId === 'checkBoxTreatmentEventAnticoagulants').TrustCount.toString() + ' %';
    document.getElementById('checkBoxTreatmentEventHormonalContraceptionPercentage').innerText = formFields.find(o => o.FieldId === 'checkBoxTreatmentEventHormonalContraception').TrustCount.toString() + ' %';
    document.getElementById('checkBoxTreatmentEventStatinPercentage').innerText = formFields.find(o => o.FieldId === 'checkBoxTreatmentEventStatin').TrustCount.toString() + ' %';
    document.getElementById('glucosePercentage').innerText = formFields.find(o => o.FieldId === 'glucose').TrustCount.toString() + ' %';
    document.getElementById('cholesterolPercentage').innerText = formFields.find(o => o.FieldId === 'cholesterol').TrustCount.toString() + ' %';
    document.getElementById('systolicPercentage').innerText = formFields.find(o => o.FieldId === 'systolic').TrustCount.toString() + ' %';
    document.getElementById('diastolicPercentage').innerText = formFields.find(o => o.FieldId === 'diastolic').TrustCount.toString() + ' %';
    document.getElementById('nihssPercentage').innerText = formFields.find(o => o.FieldId === 'nihss').TrustCount.toString() + ' %';
    document.getElementById('mrsPercentage').innerText = formFields.find(o => o.FieldId === 'mrs').TrustCount.toString() + ' %';
    document.getElementById('firstInrTestingPercentage').innerText = formFields.find(o => o.FieldId === 'firstInrTesting').TrustCount.toString() + ' %';
    document.getElementById('comaPercentage').innerText = formFields.find(o => o.FieldId === 'coma').TrustCount.toString() + ' %';
    document.getElementById('brainImagingPercentage').innerText = formFields.find(o => o.FieldId === 'brainImaging').TrustCount.toString() + ' %';
    document.getElementById('imagingDatePercentage').innerText = formFields.find(o => o.FieldId === 'imagingDate').TrustCount.toString() + ' %';
    document.getElementById('radioInfarctsYesPercentage').innerText = formFields.find(o => o.FieldId === 'radioInfarctsYes').TrustCount.toString() + ' %';
    document.getElementById('radioInfarctsNoPercentage').innerText = formFields.find(o => o.FieldId === 'radioInfarctsNo').TrustCount.toString() + ' %';
    document.getElementById('checkBoxInfarctsCorticalPercentage').innerText = formFields.find(o => o.FieldId === 'checkBoxInfarctsCortical').TrustCount.toString() + ' %';
    document.getElementById('checkBoxInfarctsSubCorticalPercentage').innerText = formFields.find(o => o.FieldId === 'checkBoxInfarctsSubCortical').TrustCount.toString() + ' %';
    document.getElementById('checkBoxBrainstemPercentage').innerText = formFields.find(o => o.FieldId === 'checkBoxBrainstem').TrustCount.toString() + ' %';
    document.getElementById('strokeTypePercentage').innerText = formFields.find(o => o.FieldId === 'strokeType').TrustCount.toString() + ' %';
    document.getElementById('aspectScorePercentage').innerText = formFields.find(o => o.FieldId === 'aspectScore').TrustCount.toString() + ' %';
    document.getElementById("radioArterialYesPercentage").innerText = formFields.find(o => o.FieldId == 'radioArterialYes').TrustCount.toString() + " %";
    document.getElementById("radioArterialNoPercentage").innerText = formFields.find(o => o.FieldId == 'radioArterialNo').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialMCA1LeftPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialMCA1Left').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialMCA2LeftPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialMCA2Left').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialMCA3LeftPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialMCA3Left').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialACAPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialACA').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialPCA1LeftPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialPCA1Left').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialPCA2LeftPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialPCA2Left').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialCEALeftPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialCEALeft').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialCIALeftPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialCIALeft').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialVertebralPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialVertebral').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialMCA1RightPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialMCA1Right').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialMCA2RightPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialMCA2Right').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialMCA3RightPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialMCA3Right').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialACARightPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialACARight').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialPCA1RightPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialPCA1Right').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialPCA2RightPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialPCA2Right').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialCEARightPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialCEARight').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialCIARightPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialCIARight').TrustCount.toString() + " %";
    document.getElementById("checkBoxArterialBasilarPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxArterialBasilar').TrustCount.toString() + " %";
    document.getElementById("radioThrombolysisPercentage").innerText = [formFields.find(o => o.FieldId === 'radioThrombolysisCheck').TrustCount, formFields.find(o => o.FieldId === 'radioThrombolysisUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("thrombolysisReasonPercentage").innerText = formFields.find(o => o.FieldId == 'thrombolysisReason').TrustCount.toString() + " %";
    document.getElementById("thrombolysisDatePercentage").innerText = formFields.find(o => o.FieldId == 'thrombolysisDate').TrustCount.toString() + " %";
    document.getElementById("drugUsedPercentage").innerText = formFields.find(o => o.FieldId == 'drugUsed').TrustCount.toString() + " %";
    document.getElementById("radioAnticoagulantPercentage").innerText = [formFields.find(o => o.FieldId === 'radioAnticoagulantYes').TrustCount, formFields.find(o => o.FieldId === 'radioAnticoagulantNo').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("treatmentDosePercentage").innerText = formFields.find(o => o.FieldId == 'treatmentDose').TrustCount.toString() + " %";
    document.getElementById("bolusDatePercentage").innerText = formFields.find(o => o.FieldId == 'bolusDate').TrustCount.toString() + " %";
    document.getElementById("thrombolysisGivenPercentage").innerText = formFields.find(o => o.FieldId == 'thrombolysisGiven').TrustCount.toString() + " %";
    document.getElementById("thrombectomyPercentage").innerText = [formFields.find(o => o.FieldId === 'thrombectomyCheck').TrustCount, formFields.find(o => o.FieldId === 'thrombectomyUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("thrombectomyReasonPercentage").innerText = formFields.find(o => o.FieldId == 'thrombectomyReason').TrustCount.toString() + " %";
    document.getElementById("thrombectomyDatePercentage").innerText = formFields.find(o => o.FieldId == 'thrombectomyDate').TrustCount.toString() + " %";
    document.getElementById("groinDatePercentage").innerText = formFields.find(o => o.FieldId == 'groinDate').TrustCount.toString() + " %";
    document.getElementById("mTICIScorePercentage").innerText = formFields.find(o => o.FieldId == 'mTICIScore').TrustCount.toString() + " %";
    document.getElementById("reperfusionDatePercentage").innerText = formFields.find(o => o.FieldId == 'reperfusionDate').TrustCount.toString() + " %";
    document.getElementById("radioThrombectomyYesPercentage").innerText = formFields.find(o => o.FieldId == 'radioThrombectomyYes').TrustCount.toString() + " %";
    document.getElementById("radioThrombectomyNoPercentage").innerText = formFields.find(o => o.FieldId == 'radioThrombectomyNo').TrustCount.toString() + " %";
    document.getElementById("checkBoxThrombectomyVesselPerforationPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThrombectomyVesselPerforation').TrustCount.toString() + " %";
    document.getElementById("checkBoxThrombectomyDissectionPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThrombectomyDissection').TrustCount.toString() + " %";
    document.getElementById("checkBoxThrombectomyEmbolizationPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThrombectomyEmbolization').TrustCount.toString() + " %";
    document.getElementById("checkBoxThrombectomyHematomaPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThrombectomyHematoma').TrustCount.toString() + " %";
    document.getElementById("checkBoxThrombectomyOtherPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThrombectomyOther').TrustCount.toString() + " %";
    document.getElementById("bleedingVolumePercentage").innerText = formFields.find(o => o.FieldId == 'bleedingVolume').TrustCount.toString() + " %";
    document.getElementById("infratentorialPercentage").innerText = [formFields.find(o => o.FieldId === 'infratentorialCheck').TrustCount, formFields.find(o => o.FieldId === 'infratentorialUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("bleedingPercentage").innerText = [formFields.find(o => o.FieldId === 'bleedingCheck').TrustCount, formFields.find(o => o.FieldId === 'bleedingUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("intraventricularPercentage").innerText = [formFields.find(o => o.FieldId === 'intraventricularCheck').TrustCount, formFields.find(o => o.FieldId === 'intraventricularUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("radioBleedingReasonYesPercentage").innerText = formFields.find(o => o.FieldId == 'radioBleedingReasonYes').TrustCount.toString() + " %";
    document.getElementById("radioBleedingReasonNoPercentage").innerText = formFields.find(o => o.FieldId == 'radioBleedingReasonNo').TrustCount.toString() + " %";
    document.getElementById("checkBoxBleedingReasonArterialHypertensionPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxBleedingReasonArterialHypertension').TrustCount.toString() + " %";
    document.getElementById("checkBoxBleedingReasonAneurysmPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxBleedingReasonAneurysm').TrustCount.toString() + " %";
    document.getElementById("checkBoxBleedingReasonArteriovenousMalformationPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxBleedingReasonArteriovenousMalformation').TrustCount.toString() + " %";
    document.getElementById("checkBoxBleedingReasonAnticoagulationTherapyPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxBleedingReasonAnticoagulationTherapy').TrustCount.toString() + " %";
    document.getElementById("checkBoxBleedingReasonAmyloidAngiopathyPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxBleedingReasonAmyloidAngiopathy').TrustCount.toString() + " %";
    document.getElementById("antidoteAnticoagulantsPercentage").innerText = formFields.find(o => o.FieldId == 'antidoteAnticoagulants').TrustCount.toString() + " %";
    document.getElementById("radioNeurosurgeryYesPercentage").innerText = formFields.find(o => o.FieldId == 'radioNeurosurgeryYes').TrustCount.toString() + " %";
    document.getElementById("radioNeurosurgeryNoPercentage").innerText = formFields.find(o => o.FieldId == 'radioNeurosurgeryNo').TrustCount.toString() + " %";
    document.getElementById("checkBoxNeurosurgeryIntracranialHematomaEvacuationPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxNeurosurgeryIntracranialHematomaEvacuation').TrustCount.toString() + " %";
    document.getElementById("checkBoxNeurosurgeryExternalVentricularDrainagePercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxNeurosurgeryExternalVentricularDrainage').TrustCount.toString() + " %";
    document.getElementById("checkBoxNeurosurgeryDecompresiveCraniectomyPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxNeurosurgeryDecompresiveCraniectomy').TrustCount.toString() + " %";
    document.getElementById("clinicalSymptomsPercentage").innerText = formFields.find(o => o.FieldId == 'clinicalSymptoms').TrustCount.toString() + " %";
    document.getElementById("symptomsDurationPercentage").innerText = formFields.find(o => o.FieldId == 'symptomsDuration').TrustCount.toString() + " %";
    document.getElementById("bleedingSubarachnoidPercentage").innerText = [formFields.find(o => o.FieldId === 'bleedingSubarachnoidCheck').TrustCount, formFields.find(o => o.FieldId === 'bleedingSubarachnoidUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("huntHessPercentage").innerText = formFields.find(o => o.FieldId == 'huntHess').TrustCount.toString() + " %";

    document.getElementById("radioInterventionYesPercentage").innerText = formFields.find(o => o.FieldId == 'radioInterventionYes').TrustCount.toString() + " %";
    document.getElementById("radioInterventionNoPercentage").innerText = formFields.find(o => o.FieldId == 'radioInterventionNo').TrustCount.toString() + " %";
    document.getElementById("checkBoxInterventionEndovascularPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxInterventionEndovascular').TrustCount.toString() + " %";
    document.getElementById("checkBoxInterventionNeurosurgicalPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxInterventionNeurosurgical').TrustCount.toString() + " %";
    document.getElementById("checkBoxInterventionVentricularDrainagePercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxInterventionVentricularDrainage').TrustCount.toString() + " %";
    document.getElementById("checkBoxInterventionDecompressiveCraniectomyPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxInterventionDecompressiveCraniectomy').TrustCount.toString() + " %";
    document.getElementById("checkBoxInterventionOtherPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxInterventionOther').TrustCount.toString() + " %";
    document.getElementById("nimodipineTreatmentPercentage").innerText = formFields.find(o => o.FieldId == 'nimodipineTreatment').TrustCount.toString() + " %";
    document.getElementById("radioTreatmentPerformedYesPercentage").innerText = formFields.find(o => o.FieldId == 'radioTreatmentPerformedYes').TrustCount.toString() + " %";
    document.getElementById("radioTreatmentPerformedNoPercentage").innerText = formFields.find(o => o.FieldId == 'radioTreatmentPerformedNo').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPerformedAnticoagulationPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPerformedAnticoagulation').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPerformedThrombectomyPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPerformedThrombectomy').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPerformedThrombolysisPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPerformedThrombolysis').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPerformedNeurosurgicalPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPerformedNeurosurgical').TrustCount.toString() + " %";

    document.getElementById("radioThrombolysisMimicPercentage").innerText = [formFields.find(o => o.FieldId === 'radioThrombolysisMimicCheck').TrustCount, formFields.find(o => o.FieldId === 'radioThrombolysisMimicUnCheck').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("drugUsedThrombolysisPercentage").innerText = formFields.find(o => o.FieldId == 'drugUsedThrombolysis').TrustCount.toString() + " %";

    document.getElementById("bleedingSubarachnoidPercentage").innerText = [formFields.find(o => o.FieldId === 'radioAnticoagulantMimicsNo').TrustCount, formFields.find(o => o.FieldId === 'radioAnticoagulantMimicsYes').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";

    document.getElementById("treatmentDoseMimicsPercentage").innerText = formFields.find(o => o.FieldId == 'treatmentDoseMimics').TrustCount.toString() + " %";
    document.getElementById("bolusMimicDatePercentage").innerText = formFields.find(o => o.FieldId == 'bolusMimicDate').TrustCount.toString() + " %";
    document.getElementById("finalDiagnosisPercentage").innerText = formFields.find(o => o.FieldId == 'finalDiagnosis').TrustCount.toString() + " %";
    document.getElementById("ctmrPerfusionPercentage").innerText = formFields.find(o => o.FieldId == 'ctmrPerfusion').TrustCount.toString() + " %";
    document.getElementById("coreVolumePercentage").innerText = formFields.find(o => o.FieldId == 'coreVolume').TrustCount.toString() + " %";
    document.getElementById("hypoperfusionVolumePercentage").innerText = formFields.find(o => o.FieldId == 'hypoperfusionVolume').TrustCount.toString() + " %";
    document.getElementById("dischargeDestinationPercentage").innerText = formFields.find(o => o.FieldId == 'dischargeDestination').TrustCount.toString() + " %";
    document.getElementById("dischargeDestinationFacilityPercentage").innerText = formFields.find(o => o.FieldId == 'dischargeDestinationFacility').TrustCount.toString() + " %";
    document.getElementById("dischargeFacilityPercentage").innerText = formFields.find(o => o.FieldId == 'dischargeFacility').TrustCount.toString() + " %";
    document.getElementById("dischargeDatePercentage").innerText = formFields.find(o => o.FieldId == 'dischargeDate').TrustCount.toString() + " %";
    document.getElementById("mrsScorePercentage").innerText = formFields.find(o => o.FieldId == 'mrsScore').TrustCount.toString() + " %";
    document.getElementById("dischargePercentage").innerText = formFields.find(o => o.FieldId == 'discharge').TrustCount.toString() + " %";
    document.getElementById("radioTreatmentPrescribedYesPercentage").innerText = formFields.find(o => o.FieldId == 'radioTreatmentPrescribedYes').TrustCount.toString() + " %";
    document.getElementById("radioTreatmentPrescribedNoPercentage").innerText = formFields.find(o => o.FieldId == 'radioTreatmentPrescribedNo').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPrescribedAntidiabeticsPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPrescribedAntidiabetics').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPrescribedAntihypertensivesPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPrescribedAntihypertensives').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPrescribedAntiplateletsPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPrescribedAntiplatelets').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPrescribedAnticoagulantsPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPrescribedAnticoagulants').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPrescribedAnticoagulantPlannedPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPrescribedAnticoagulantPlanned').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPrescribedStatinPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPrescribedStatin').TrustCount.toString() + " %";
    document.getElementById("checkBoxTreatmentPrescribedOtherPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxTreatmentPrescribedOther').TrustCount.toString() + " %";
    document.getElementById("appointmentScheduledPercentage").innerText = formFields.find(o => o.FieldId == 'appointmentScheduled').TrustCount.toString() + " %";
    document.getElementById("smokingCessationPercentage").innerText = formFields.find(o => o.FieldId == 'smokingCessation').TrustCount.toString() + " %";
    document.getElementById("onsetTimePercentage").innerText = formFields.find(o => o.FieldId == 'onsetTime').TrustCount.toString() + " %";
    document.getElementById("onsetDatePercentage").innerText = formFields.find(o => o.FieldId == 'onsetDate').TrustCount.toString() + " %";
    document.getElementById("hospitalised24HourPercentage").innerText = formFields.find(o => o.FieldId == 'hospitalised24Hour').TrustCount.toString() + " %";
    document.getElementById("radioVentilatedPercentage").innerText = [formFields.find(o => o.FieldId === 'radioVentilatedYes').TrustCount, formFields.find(o => o.FieldId === 'radioVentilatedNo').TrustCount].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0]?.toString() || "";
    document.getElementById("radioThromboembolismYesPercentage").innerText = formFields.find(o => o.FieldId == 'radioThromboembolismYes').TrustCount.toString() + " %";
    document.getElementById("radioThromboembolismNoPercentage").innerText = formFields.find(o => o.FieldId == 'radioThromboembolismNo').TrustCount.toString() + " %";
    document.getElementById("checkBoxThromboembolismUFHPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThromboembolismUFH').TrustCount.toString() + " %";
    document.getElementById("checkBoxThromboembolismLMWHPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThromboembolismLMWH').TrustCount.toString() + " %";
    document.getElementById("checkBoxThromboembolismIPCPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThromboembolismIPC').TrustCount.toString() + " %";
    document.getElementById("checkBoxThromboembolismGCSPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThromboembolismGCS').TrustCount.toString() + " %";
    document.getElementById("checkBoxThromboembolismVTEPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThromboembolismVTE').TrustCount.toString() + " %";
    document.getElementById("checkBoxThromboembolismVFPPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThromboembolismVFP').TrustCount.toString() + " %";
    document.getElementById("checkBoxThromboembolismXaVTEPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThromboembolismXaVTE').TrustCount.toString() + " %";
    document.getElementById("checkBoxThromboembolismOtherPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxThromboembolismOther').TrustCount.toString() + " %";
    document.getElementById("radioStrokeCompYesPercentage").innerText = formFields.find(o => o.FieldId == 'radioStrokeCompYes').TrustCount.toString() + " %";
    document.getElementById("radioStrokeCompNoPercentage").innerText = formFields.find(o => o.FieldId == 'radioStrokeCompNo').TrustCount.toString() + " %";
    document.getElementById("radioStrokeCompUnknownPercentage").innerText = formFields.find(o => o.FieldId == 'radioStrokeCompUnknown').TrustCount.toString() + " %";
    document.getElementById("checkBoxStrokeCompPneumoniaPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxStrokeCompPneumonia').TrustCount.toString() + " %";
    document.getElementById("checkBoxStrokeCompDVTPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxStrokeCompDVT').TrustCount.toString() + " %";
    document.getElementById("checkBoxStrokeCompPulmonaryPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxStrokeCompPulmonary').TrustCount.toString() + " %";
    document.getElementById("checkBoxStrokeCompUrinaryPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxStrokeCompUrinary').TrustCount.toString() + " %";
    document.getElementById("checkBoxStrokeCompSoresPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxStrokeCompSores').TrustCount.toString() + " %";
    document.getElementById("checkBoxStrokeCompSepsisPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxStrokeCompSepsis').TrustCount.toString() + " %";
    document.getElementById("checkBoxStrokeCompRecurrencePercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxStrokeCompRecurrence').TrustCount.toString() + " %";
    document.getElementById("checkBoxStrokeCompOtherPercentage").innerText = formFields.find(o => o.FieldId == 'checkBoxStrokeCompOther').TrustCount.toString() + " %";



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
    if (value == "1" || value == "4" || value == "7" || value == "8") {
        selectedDiv.style.display = "none";
    }
    if (value == "8") {
        imagingDiv.style.display = "none";
        imagingDateVerification.style.display = "none";
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

function toggleVerification(id: string, ids: string[] = [], checkBoxIds: string [] = []) {
    document.getElementById("verify-"+ id).style.display = "none";
    document.getElementById("edit-"+ id).style.display = "inline";
    if (ids && ids.length > 0) {
        for (let id of ids) {
            (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = true;
        }
        if (checkBoxIds && checkBoxIds.length > 0) {
            for (let checkBoxId of checkBoxIds) {
                (document.getElementById(checkBoxId) as HTMLInputElement | HTMLSelectElement).disabled = true;
            }
        }
    } else {
        (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = true;
    }
}

function toggleEdit(id: string, ids: string[] = [], checkBoxIds: string [] = []) {
    document.getElementById("verify-"+ id).style.display = "inline";
    document.getElementById("edit-"+ id).style.display = "none";
    if (ids && ids.length > 0) {
        for (let id of ids) {
            (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = false;
        }
        if (checkBoxIds && checkBoxIds.length > 0) {
            for (let checkBoxId of checkBoxIds) {
                (document.getElementById(checkBoxId) as HTMLInputElement | HTMLSelectElement).disabled = false;
            }
        }
    } else {
        (document.getElementById(id) as HTMLInputElement | HTMLSelectElement).disabled = false;
    }
}

