var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mapper } from "./Mapper.js";
import jsonData1 from './reports/FNM-discharge-report-1.cs.json' assert { type: 'json' };
import jsonData2 from './reports/FNUSA-discharge-report-1.cs.json' assert { type: 'json' };
import jsonData3 from './reports/FNUSA-discharge-report-2.cs.json' assert { type: 'json' };
// Execute the function 10 minutes after page load
window.onload = function () {
    setTimeout(closeForm, 660000); // 660,000 milliseconds = 11 minutes
};
let jsonDataStorage = [jsonData1, jsonData2, jsonData3];
const allFormFields = document.querySelectorAll('input, select');
let switchForm = true;
window.changeColor = changeColor;
window.resetColor = resetColor;
window.applyWarningStyle = applyWarningStyle;
window.removeWarningStyle = removeWarningStyle;
window.toggleDivImaging = toggleDivImaging;
window.toggleSubDiv = toggleSubDiv;
window.thrombolysisTimeToggle = thrombolysisTimeToggle;
window.thrombectomyTimeToggle = thrombectomyTimeToggle;
window.perfusionDeficitToggle = perfusionDeficitToggle;
window.dischargeDestinationToggle = dischargeDestinationToggle;
window.triggerChangeEvent = triggerChangeEvent;
window.toggleVerification = toggleVerification;
window.toggleEdit = toggleEdit;
window.mticiToggle = mticiToggle;
window.formSwitch = formSwitch;
window.exportData = exportData;
window.highLight = highLight;
let formFields = [
    { highLights: [], FieldId: "age", TrustCount: [88, 74, 85], Verified: [false, false, false], Value: "20", Edited: [false, false, false] },
    { highLights: [], FieldId: "sex", TrustCount: [71, 77, 4], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "wakeUpStrokeCheck", TrustCount: [65, 73, 80], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "wakeUpStrokeUnCheck", TrustCount: [67, 71, 62], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "wakeUpDate", TrustCount: [75, 60, 67], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "strokeCheck", TrustCount: [89, 69, 0], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "strokeUnCheck", TrustCount: [68, 85, 0], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "firstAttented", TrustCount: [90, 80, 66], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "arrivalDate", TrustCount: [76, 62, 79], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "arrivalTime", TrustCount: [44, 67, 65], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "onsetDate", TrustCount: [44, 83, 47], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "onsetTime", TrustCount: [60, 89, 61], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "arrivedFrom", TrustCount: [7, 13, 61], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "hospitalizedIn", TrustCount: [64, 78, 76], Verified: [false, false, false], Value: "2", Edited: [false, false, false] },
    { highLights: [], FieldId: "department", TrustCount: [78, 90, 60], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioMedicalHistoryYes", TrustCount: [62, 62, 87], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioMedicalHistoryNone", TrustCount: [75, 72, 60], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioMedicalHistoryUnknown", TrustCount: [83, 74, 74], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryHypertension", TrustCount: [83, 74, 88], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryDiabetes", TrustCount: [75, 90, 78], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryHyperlipidemia", TrustCount: [79, 62, 83], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryActiveSmoker", TrustCount: [81, 67, 79], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryPreviousIschemic", TrustCount: [79, 76, 65], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryPreviousHemorrhage", TrustCount: [68, 86, 60], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryAtrialFibrillation", TrustCount: [75, 61, 72], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryCoronaryArtery", TrustCount: [79, 80, 80], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryCongestiveHeartFailure", TrustCount: [67, 84, 81], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryHIV", TrustCount: [83, 60, 87], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxMedicalHistoryCOVIDPositive", TrustCount: [69, 3, 60], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioTreatmentEventYes", TrustCount: [31, 74, 78], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioTreatmentEventNone", TrustCount: [80, 77, 79], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioTreatmentEventUnknown", TrustCount: [62, 82, 71], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentEventAntidiabetics", TrustCount: [61, 70, 72], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentEventAntihypertensives", TrustCount: [86, 43, 75], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentEventAntiplatelets", TrustCount: [88, 84, 73], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentEventAnticoagulants", TrustCount: [62, 85, 80], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentEventHormonalContraception", TrustCount: [73, 75, 88], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentEventStatin", TrustCount: [77, 74, 77], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "glucose", TrustCount: [55, 81, 66], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "cholesterol", TrustCount: [66, 65, 65], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "systolic", TrustCount: [21, 89, 60], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "diastolic", TrustCount: [89, 83, 63], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "nihss", TrustCount: [89, 62, 81], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "mrs", TrustCount: [90, 6, 69], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "firstInrTesting", TrustCount: [73, 75, 75], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "coma", TrustCount: [67, 89, 90], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "brainImaging", TrustCount: [69, 80, 70], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "imagingDate", TrustCount: [87, 79, 90], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "imagingTime", TrustCount: [75, 88, 76], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioInfarctsYes", TrustCount: [89, 64, 80], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioInfarctsNo", TrustCount: [80, 15, 84], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxInfarctsCortical", TrustCount: [89, 90, 82], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxInfarctsSubCortical", TrustCount: [67, 69, 77], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxBrainstem", TrustCount: [88, 70, 86], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "typeStroke", TrustCount: [75, 69, 67], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "aspectScore", TrustCount: [83, 78, 75], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioArterialYes", TrustCount: [22, 66, 63], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioArterialNo", TrustCount: [71, 84, 63], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialMCA1Left", TrustCount: [74, 77, 88], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialMCA2Left", TrustCount: [88, 70, 78], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialMCA3Left", TrustCount: [78, 80, 77], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialACA", TrustCount: [65, 74, 85], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialPCA1Left", TrustCount: [65, 75, 71], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialPCA2Left", TrustCount: [69, 85, 64], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialCEALeft", TrustCount: [66, 67, 70], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialCIALeft", TrustCount: [71, 85, 76], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialVertebral", TrustCount: [81, 80, 77], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialMCA1Right", TrustCount: [68, 81, 71], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialMCA2Right", TrustCount: [81, 88, 73], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialMCA3Right", TrustCount: [74, 82, 12], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialACARight", TrustCount: [65, 86, 83], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialPCA1Right", TrustCount: [82, 65, 76], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialPCA2Right", TrustCount: [72, 87, 80], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialCEARight", TrustCount: [73, 89, 85], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialCIARight", TrustCount: [60, 71, 63], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxArterialBasilar", TrustCount: [10, 69, 81], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioThrombolysisCheck", TrustCount: [88, 70, 67], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioThrombolysisUnCheck", TrustCount: [83, 81, 79], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "thrombolysisReason", TrustCount: [77, 85, 62], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "thrombolysisDate", TrustCount: [72, 82, 70], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "drugUsed", TrustCount: [69, 87, 6], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioAnticoagulantYes", TrustCount: [70, 90, 69], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioAnticoagulantNo", TrustCount: [75, 61, 76], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "treatmentDose", TrustCount: [85, 57, 74], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "bolusDate", TrustCount: [62, 82, 87], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "thrombolysisGiven", TrustCount: [78, 67, 84], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "thrombectomyCheck", TrustCount: [78, 67, 84], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "thrombectomyUnCheck", TrustCount: [78, 67, 84], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "thrombectomyReason", TrustCount: [69, 75, 69], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "thrombectomyDate", TrustCount: [12, 62, 77], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "groinDate", TrustCount: [89, 61, 72], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "mTICIScore", TrustCount: [89, 61, 72], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "reperfusionDate", TrustCount: [83, 80, 86], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioThrombectomyYes", TrustCount: [82, 74, 60], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioThrombectomyNo", TrustCount: [67, 73, 74], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThrombectomyVesselPerforation", TrustCount: [86, 82, 89], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThrombectomyDissection", TrustCount: [86, 82, 89], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThrombectomyEmbolization", TrustCount: [73, 72, 63], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThrombectomyHematoma", TrustCount: [60, 70, 16], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThrombectomyOther", TrustCount: [16, 70, 90], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "bleedingVolume", TrustCount: [71, 61, 71], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "infratentorialCheck", TrustCount: [67, 71, 77], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "infratentorialUnCheck", TrustCount: [67, 77, 79], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "bleedingCheck", TrustCount: [70, 70, 73], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "bleedingUnCheck", TrustCount: [79, 80, 63], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "intraventricularCheck", TrustCount: [17, 6, 78], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "intraventricularUnCheck", TrustCount: [72, 73, 83], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioBleedingReasonYes", TrustCount: [71, 85, 88], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioBleedingReasonNo", TrustCount: [12, 76, 71], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxBleedingReasonArterialHypertension", TrustCount: [66, 75, 68], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxBleedingReasonAneurysm", TrustCount: [86, 36, 76], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxBleedingReasonArteriovenousMalformation", TrustCount: [71, 86, 89], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxBleedingReasonAnticoagulationTherapy", TrustCount: [70, 80, 75], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxBleedingReasonAmyloidAngiopathy", TrustCount: [87, 75, 80], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxBleedingReasonOther", TrustCount: [76, 78, 68], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "antidoteAnticoagulants", TrustCount: [78, 87, 66], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioNeurosurgeryYes", TrustCount: [78, 87, 66], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioNeurosurgeryNo", TrustCount: [86, 77, 75], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxNeurosurgeryIntracranialHematomaEvacuation", TrustCount: [2, 81, 75], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxNeurosurgeryExternalVentricularDrainage", TrustCount: [89, 76, 85], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxNeurosurgeryDecompresiveCraniectomy", TrustCount: [87, 62, 83], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "clinicalSymptoms", TrustCount: [79, 65, 70], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "symptomsDuration", TrustCount: [88, 79, 34], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "bleedingSubarachnoidCheck", TrustCount: [74, 81, 62], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "bleedingSubarachnoidUnCheck", TrustCount: [44, 69, 67], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "huntHess", TrustCount: [75, 45, 60], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioInterventionYes", TrustCount: [68, 70, 80], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioInterventionNo", TrustCount: [79, 74, 78], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxInterventionEndovascular", TrustCount: [85, 68, 81], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxInterventionNeurosurgical", TrustCount: [89, 71, 87], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxInterventionVentricularDrainage", TrustCount: [88, 83, 66], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxInterventionDecompressiveCraniectomy", TrustCount: [90, 62, 78], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxInterventionOther", TrustCount: [85, 89, 87], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "nimodipineTreatment", TrustCount: [66, 80, 63], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioTreatmentPerformedYes", TrustCount: [37, 87, 76], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioTreatmentPerformedNo", TrustCount: [77, 89, 57], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPerformedAnticoagulation", TrustCount: [83, 86, 89], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPerformedThrombectomy", TrustCount: [81, 73, 21], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPerformedThrombolysis", TrustCount: [79, 66, 30], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPerformedNeurosurgical", TrustCount: [83, 62, 72], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioThrombolysisMimicCheck", TrustCount: [80, 89, 79], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioThrombolysisMimicUnCheck", TrustCount: [82, 71, 77], Verified: [false, false, false], Value: "true", Edited: [false, false, false] },
    { highLights: [], FieldId: "drugUsedThrombolysis", TrustCount: [11, 66, 63], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioAnticoagulantMimicsYes", TrustCount: [23, 72, 62], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioAnticoagulantMimicsNo", TrustCount: [81, 84, 89], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "treatmentDoseMimics", TrustCount: [64, 74, 68], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "bolusMimicDate", TrustCount: [65, 66, 67], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "finalDiagnosis", TrustCount: [71, 62, 84], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "ctmrPerfusion", TrustCount: [61, 86, 60], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "coreVolume", TrustCount: [82, 67, 83], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "hypoperfusionVolume", TrustCount: [75, 73, 85], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "dischargeDestination", TrustCount: [51, 72, 61], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "dischargeDestinationFacility", TrustCount: [77, 80, 66], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "dischargeFacility", TrustCount: [66, 71, 71], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "dischargeDate", TrustCount: [89, 87, 89], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "mrsScore", TrustCount: [83, 85, 70], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "discharge", TrustCount: [62, 63, 73], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioTreatmentPrescribedYes", TrustCount: [71, 67, 78], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioTreatmentPrescribedNo", TrustCount: [81, 75, 88], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAntidiabetics", TrustCount: [84, 90, 86], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAntihypertensives", TrustCount: [85, 79, 89], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAntiplatelets", TrustCount: [62, 80, 86], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAnticoagulants", TrustCount: [86, 77, 64], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedAnticoagulantPlanned", TrustCount: [68, 14, 79], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedStatin", TrustCount: [87, 6, 66], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxTreatmentPrescribedOther", TrustCount: [16, 80, 80], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "appointmentScheduled", TrustCount: [16, 80, 80], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "smokingCessation", TrustCount: [74, 5, 61], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "hospitalised24Hour", TrustCount: [65, 65, 89], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioVentilatedYes", TrustCount: [86, 45, 0], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioVentilatedNo", TrustCount: [13, 71, 0], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioCraniectomyYes", TrustCount: [85, 86, 72], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioCraniectomyNo", TrustCount: [65, 83, 86], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioThromboembolismYes", TrustCount: [67, 79, 74], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioThromboembolismNo", TrustCount: [61, 90, 75], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThromboembolismUFH", TrustCount: [82, 78, 63], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThromboembolismLMWH", TrustCount: [65, 81, 72], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThromboembolismIPC", TrustCount: [74, 88, 76], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThromboembolismGCS", TrustCount: [60, 77, 58], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThromboembolismVTE", TrustCount: [90, 64, 11], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThromboembolismVFP", TrustCount: [82, 72, 90], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThromboembolismXaVTE", TrustCount: [17, 75, 62], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxThromboembolismOther", TrustCount: [67, 81, 68], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioStrokeCompYes", TrustCount: [64, 81, 90], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioStrokeCompNo", TrustCount: [74, 89, 78], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "radioStrokeCompUnknown", TrustCount: [64, 74, 67], Verified: [false, false, false], Value: "false", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxStrokeCompPneumonia", TrustCount: [72, 70, 88], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxStrokeCompDVT", TrustCount: [68, 88, 87], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxStrokeCompPulmonary", TrustCount: [60, 90, 90], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxStrokeCompUrinary", TrustCount: [66, 79, 90], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxStrokeCompSores", TrustCount: [90, 67, 60], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxStrokeCompSepsis", TrustCount: [62, 66, 87], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxStrokeCompRecurrence", TrustCount: [77, 87, 61], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
    { highLights: [], FieldId: "checkBoxStrokeCompOther", TrustCount: [24, 79, 84], Verified: [false, false, false], Value: "", Edited: [false, false, false] },
];
//This function rests all the values in formfields to "". I do this before loading in the next json file
function resetFieldValues(fields) {
    fields.forEach(field => {
        field.Value = "";
    });
}
let counter = 0;
const jsonDataDisplay = document.getElementById('jsonDataDisplay');
const loadButton = document.getElementById('loadButton');
let jsonData = jsonDataStorage[counter];
loadButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    if (counter < jsonDataStorage.length - 1) {
        counter++;
        jsonData = jsonDataStorage[counter];
        toggleEditForAll();
        resetFieldValues(formFields);
        updateListValuesFromJson();
        displayReportText();
        updateDataSummary(jsonData["_formData"]);
        initialiseForm();
        const targetDiv = document.getElementById("targetDivForm");
        const targetText = document.getElementById("targetDivText");
        targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
            targetText.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 700);
    }
    else {
        jsonDataDisplay.textContent = 'Error loading JSON data.';
    }
}));
class HighlightBlot extends Quill.import('blots/inline') {
}
HighlightBlot.blotName = 'highlight';
HighlightBlot.tagName = 'span';
HighlightBlot.className = 'highlight';
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
            const { HighLightId } = mappedItem;
            if (jsonData.hasOwnProperty('_highlights')) {
                // Access the nested property within _formData
                const formData = jsonData['_highlights'];
                // Check if the object with the mapped name exists in the nested JSON data
                if (formData.hasOwnProperty(HighLightId)) {
                    // Update the value in the list with the value from the nested JSON data
                    item.highLights = formData[HighLightId];
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
};
displayReportText();
let index = 0;
let fieldId = '';
const countFieldsAndMissing = (data) => {
    let fieldsWithData = 0;
    let missingFields = 0;
    for (const key in data) {
        const value = data[key];
        if (value !== null && value !== "" && !(Array.isArray(value) && value.length === 0) && !(typeof value === 'object' && Object.keys(value).length === 0)) {
            fieldsWithData++;
        }
        else {
            missingFields++;
        }
    }
    return { fieldsWithData, missingFields };
};
const calculateFilledPercentage = (data) => {
    const totalFields = Object.keys(data).length;
    const { fieldsWithData } = countFieldsAndMissing(data);
    return (fieldsWithData / totalFields) * 100;
};
const updateDataSummary = (formData) => {
    const totalFieldsElement = document.getElementById("totalFieldsValue");
    const fieldsWithDataElement = document.getElementById("fieldsWithDataValue");
    const missingFieldsElement = document.getElementById("missingFieldsValue");
    const filledPercentageElement = document.getElementById("filledPercentageValue");
    const totalFields = Object.keys(formData).length;
    const { fieldsWithData, missingFields } = countFieldsAndMissing(formData);
    const filledPercentage = calculateFilledPercentage(formData).toFixed(2) + "%";
    if (totalFieldsElement)
        totalFieldsElement.textContent = totalFields.toString();
    if (fieldsWithDataElement)
        fieldsWithDataElement.textContent = fieldsWithData.toString();
    if (missingFieldsElement)
        missingFieldsElement.textContent = missingFields.toString();
    if (filledPercentageElement)
        filledPercentageElement.textContent = filledPercentage;
};
// Assuming you have the jsonData in a variable named formData
updateDataSummary(jsonData["_formData"]);
document.addEventListener('DOMContentLoaded', () => {
    initialiseForm();
});
function changeColor() {
    const inputElement = document.getElementById("age");
    applyWarningStyle(inputElement);
}
function resetColor() {
    const inputElement = document.getElementById("age");
    removeWarningStyle(inputElement);
}
function applyWarningStyle(element) {
    element.style.backgroundColor = "#FF8200";
    element.style.color = "var(--grey-900)";
}
function removeWarningStyle(element) {
    element.style.backgroundColor = "";
    element.style.color = "";
}
function toggleDivImaging(value) {
    const divs = document.querySelectorAll("[id^='imagingDiv']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        div.style.display = "none";
    }
    const selectedDiv = document.getElementById("imagingDiv" + value);
    if (selectedDiv) {
        selectedDiv.style.display = "flex";
    }
}
function toggleSubDiv(value) {
    const divs = document.querySelectorAll("[id^='imagingSubDiv']");
    const imagingDiv = document.getElementById("imagingDateDone");
    const imagingDateVerification = document.getElementById("imagingDateVerification");
    const infarctsDiv = document.getElementById("infarctsDiv");
    const perfusionDeficitDiv = document.getElementById("perfusionDeficitDiv");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
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
function mticiToggle(value) {
    const divs = document.querySelectorAll("[id^='mticiDiv']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        div.style.display = "block";
    }
    const selectedDiv = document.getElementById("mticiDiv");
    if (value == "0") {
        selectedDiv.style.display = "none";
    }
}
function thrombolysisTimeToggle(value) {
    const divs = document.querySelectorAll("[id^='thrombolysisDiv']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        div.style.display = "none";
    }
    const selectedDiv = document.getElementById("thrombolysisDiv");
    if (value == "transferred") {
        selectedDiv.style.display = "block";
    }
}
function thrombectomyTimeToggle(value) {
    const divs = document.querySelectorAll("[id^='thrombectomyTimeDiv']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        div.style.display = "none";
    }
    const selectedDiv = document.getElementById("thrombectomyTimeDiv");
    if (value == "transferred") {
        selectedDiv.style.display = "block";
    }
}
function perfusionDeficitToggle(value) {
    const divs = document.querySelectorAll("[id^='perfusionDeficit']");
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        div.style.display = "flex";
    }
    const selectedDiv = document.getElementById("perfusionDeficit");
    if (value == "bilateral_stenosis" || value == "no_deficit") {
        selectedDiv.style.display = "none";
    }
}
function dischargeDestinationToggle(value) {
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
function triggerChangeEvent(element) {
    const event = new Event('change', { bubbles: true });
    element.dispatchEvent(event);
}
function toggleVerification(id, ids = [], checkBoxIds = []) {
    document.getElementById("verify-" + id).style.display = "none";
    document.getElementById("edit-" + id).style.display = "inline";
    if (ids && ids.length > 0) {
        for (let id of ids) {
            document.getElementById(id).disabled = true;
            formFields.find(o => o.FieldId == id).Verified[counter] = true;
        }
        if (checkBoxIds && checkBoxIds.length > 0) {
            for (let checkBoxId of checkBoxIds) {
                document.getElementById(checkBoxId).disabled = true;
                formFields.find(o => o.FieldId == checkBoxId).Verified[counter] = true;
            }
        }
    }
    else {
        document.getElementById(id).disabled = true;
        formFields.find(o => o.FieldId == id).Verified[counter] = true;
    }
}
function toggleEdit(id, ids = [], checkBoxIds = []) {
    document.getElementById("verify-" + id).style.display = "inline";
    document.getElementById("edit-" + id).style.display = "none";
    if (ids && ids.length > 0) {
        for (let id of ids) {
            document.getElementById(id).disabled = false;
            formFields.find(o => o.FieldId == id).Edited[counter] = true;
        }
        if (checkBoxIds && checkBoxIds.length > 0) {
            for (let checkBoxId of checkBoxIds) {
                document.getElementById(checkBoxId).disabled = false;
                formFields.find(o => o.FieldId == checkBoxId).Edited[counter] = true;
            }
        }
    }
    else {
        document.getElementById(id).disabled = false;
        formFields.find(o => o.FieldId == id).Edited[counter] = true;
    }
}
function toggleEditForAll() {
    const editedSpans = document.querySelectorAll('span[id$="Edited"]');
    const percentageSpans = document.querySelectorAll('span[id$="Percentage"]');
    editedSpans.forEach((span) => {
        span.style.display = 'none';
    });
    percentageSpans.forEach((span) => {
        span.style.display = '';
    });
}
function colorPercentage(percentage) {
    if (percentage == null) {
        return '';
    }
    else if (percentage >= 75) {
        return 'var(--green)';
    }
    else if (percentage >= 25) {
        return 'var(--yellow)';
    }
    else {
        return 'var(--warning)';
    }
}
function formSwitch(load = false) {
    if (load)
        switchForm = !switchForm;
    formFields.forEach(o => {
        const element = document.getElementById(o.FieldId + 'Percentage');
        const elementValue = document.getElementById(o.FieldId);
        if (element) {
            if (element.id.includes('checkBox') || element.id.includes('radio')) { // THIS IS WHAT DOES THE CHECKBOXES
                if ("checked" in elementValue) {
                    if (elementValue.checked) {
                        element.style.backgroundColor = colorPercentage(o.TrustCount[counter] || null);
                    }
                    else {
                        element.style.backgroundColor = '';
                    }
                }
            }
            else {
                if (elementValue.value) {
                    element.parentElement.style.backgroundColor = colorPercentage(o.TrustCount[counter] || null);
                }
                else {
                    element.parentElement.style.backgroundColor = "";
                }
            }
            if (!switchForm) {
                if (elementValue.value) {
                    if (element.id.includes('checkBox') || element.id.includes('radio')) { // THIS IS WHAT DOES THE CHECKBOXES
                        if ("checked" in elementValue) {
                            if (elementValue.checked) {
                                element.innerText = o.TrustCount[counter] ? (o.TrustCount[counter].toString() + "%") : '';
                            }
                            else {
                                element.innerText = '';
                            }
                        }
                    }
                    else {
                        element.innerText = o.TrustCount[counter] ? (o.TrustCount[counter].toString() + "%") : '';
                    }
                }
                else {
                    element.innerText = "";
                }
            }
            else {
                element.innerText = "";
            }
        }
    });
    //THESE ARE ONLY HORIZONTAL RADIO BUTTONS WITH TWO OPTIONS
    document.getElementById("strokePercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'strokeCheck').TrustCount[counter], formFields.find(o => o.FieldId === 'strokeUnCheck').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("wakeUpStrokePercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'wakeUpStrokeCheck').TrustCount[counter], formFields.find(o => o.FieldId === 'wakeUpStrokeUnCheck').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("bleedingSubarachnoidPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'bleedingSubarachnoidCheck').TrustCount[counter], formFields.find(o => o.FieldId === 'bleedingSubarachnoidUnCheck').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("radioThrombolysisMimicPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioThrombolysisMimicCheck').TrustCount[counter], formFields.find(o => o.FieldId === 'radioThrombolysisMimicUnCheck').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("radioThrombolysisPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioThrombolysisCheck').TrustCount[counter], formFields.find(o => o.FieldId === 'radioThrombolysisUnCheck').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("radioAnticoagulantPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioAnticoagulantYes').TrustCount[counter], formFields.find(o => o.FieldId === 'radioAnticoagulantNo').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("thrombectomyPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'thrombectomyCheck').TrustCount[counter], formFields.find(o => o.FieldId === 'thrombectomyUnCheck').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("infratentorialPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'infratentorialCheck').TrustCount[counter], formFields.find(o => o.FieldId === 'infratentorialUnCheck').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("bleedingPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'bleedingCheck').TrustCount[counter], formFields.find(o => o.FieldId === 'bleedingUnCheck').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("intraventricularPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'intraventricularCheck').TrustCount[counter], formFields.find(o => o.FieldId === 'intraventricularUnCheck').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("bleedingSubarachnoidPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioAnticoagulantMimicsNo').TrustCount[counter], formFields.find(o => o.FieldId === 'radioAnticoagulantMimicsYes').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("radioVentilatedPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioVentilatedYes').TrustCount[counter], formFields.find(o => o.FieldId === 'radioVentilatedNo').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    document.getElementById("radioCraniectomyPercentage").parentElement.style.backgroundColor = colorPercentage([formFields.find(o => o.FieldId === 'radioCraniectomyYes').TrustCount[counter], formFields.find(o => o.FieldId === 'radioCraniectomyNo').TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0] || null);
    if (!switchForm) {
        const getValueText = (fieldId1, fieldId2) => {
            const value = [formFields.find(o => o.FieldId === fieldId1).TrustCount[counter], formFields.find(o => o.FieldId === fieldId2).TrustCount[counter]].filter(tc => !isNaN(tc)).sort((a, b) => b - a)[0];
            return (value !== undefined && value !== null) ? (value.toString() + '%') : '';
        };
        document.getElementById("strokePercentage").innerText = getValueText('strokeCheck', 'strokeUnCheck');
        document.getElementById("wakeUpStrokePercentage").innerText = getValueText('wakeUpStrokeCheck', 'wakeUpStrokeUnCheck');
        document.getElementById("bleedingSubarachnoidPercentage").innerText = getValueText('bleedingSubarachnoidCheck', 'bleedingSubarachnoidUnCheck');
        document.getElementById("radioThrombolysisMimicPercentage").innerText = getValueText('radioThrombolysisMimicCheck', 'radioThrombolysisMimicUnCheck');
        document.getElementById("radioThrombolysisPercentage").innerText = getValueText('radioThrombolysisCheck', 'radioThrombolysisUnCheck');
        document.getElementById("radioAnticoagulantPercentage").innerText = getValueText('radioAnticoagulantYes', 'radioAnticoagulantNo');
        document.getElementById("thrombectomyPercentage").innerText = getValueText('thrombectomyCheck', 'thrombectomyUnCheck');
        document.getElementById("infratentorialPercentage").innerText = getValueText('infratentorialCheck', 'infratentorialUnCheck');
        document.getElementById("bleedingPercentage").innerText = getValueText('bleedingCheck', 'bleedingUnCheck');
        document.getElementById("intraventricularPercentage").innerText = getValueText('intraventricularCheck', 'intraventricularUnCheck');
        document.getElementById("bleedingSubarachnoidPercentage").innerText = getValueText('radioAnticoagulantMimicsNo', 'radioAnticoagulantMimicsYes');
        document.getElementById("radioVentilatedPercentage").innerText = getValueText('radioVentilatedYes', 'radioVentilatedNo');
        document.getElementById("radioCraniectomyPercentage").innerText = getValueText('radioCraniectomyYes', 'radioCraniectomyNo');
    }
    else {
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
    const data = formFields;
    const flattenedData = data.map(flattenFormField);
    let csvContent = Object.keys(flattenedData[0]).join(',') + '\n';
    csvContent += flattenedData.map(objectToCsvRow).join('');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
}
function flattenFormField(field) {
    let flatObj = {
        FieldId: field.FieldId,
        Value: field.Value,
        highLights: field.highLights.join('|')
    };
    field.TrustCount.forEach((count, index) => {
        flatObj[`TrustCount-${index + 1}`] = count;
    });
    field.Verified.forEach((verified, index) => {
        flatObj[`Verified-${index + 1}`] = verified;
    });
    field.Edited.forEach((edited, index) => {
        flatObj[`Edited-${index + 1}`] = edited;
    });
    return flatObj;
}
function objectToCsvRow(obj) {
    const values = Object.keys(obj).map(key => obj[key]);
    return values.join(',') + '\n';
}
function highlightText(start, length) {
    quill.setSelection(start, length);
}
function highLight(id) {
    const highLights = formFields.find(o => o.FieldId == id).highLights;
    if (highLights.length != 0) {
        if (fieldId == id) {
            index++;
            if (index >= highLights.length) {
                index = 0;
            }
        }
        else {
            index = 0;
            fieldId = id;
        }
        const focusedElement = document.activeElement;
        highlightText(highLights[index].index, highLights[index].length);
        if (highLights.length == 1) {
            highLightIterator(index, id);
        }
        else if (highLights.length <= index + 1) {
            highLightIterator(0, id);
        }
        else {
            highLightIterator(index + 1, id);
        }
    }
}
function highLightIterators(index = 0) {
    formFields.forEach(o => {
        const element = document.getElementById(o.FieldId + 'Iterator');
        try {
            if (o.highLights.length != 0) {
                element.innerText = (index + 1).toString() + '/' + o.highLights.length.toString();
            }
            if (o.Value && o.highLights.length == 0) {
                element.innerText = 'Not found';
            }
            if (!o.Value) {
                element.innerText = 'Missing';
            }
        }
        catch (_a) {
        }
    });
}
function highLightIterator(index = 0, id) {
    const highLights = formFields.find(o => o.FieldId == id).highLights;
    const element = document.getElementById(id + 'Iterator');
    try {
        if (highLights.length != 0) {
            element.innerText = (index + 1).toString() + '/' + highLights.length.toString();
        }
    }
    catch (_a) {
    }
}
function closeForm() {
    let button = document.getElementById('submitForm');
    button.click();
}
function initialiseForm() {
    const textarea = document.getElementById('note-editor-textarea');
    formFields.forEach(field => {
        let formFieldElement = document.getElementById(field.FieldId);
        if (formFieldElement) {
            const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
            if (regex.test(field.Value)) {
                if (formFieldElement.type == "date") {
                    formFieldElement.value = field.Value.split('T')[0];
                }
                else {
                    const timeArray = field.Value.split('T')[1].split(':'); // will return ['HH', 'MM', 'SS']
                    formFieldElement.value = `${timeArray[0]}:${timeArray[1]}`;
                }
            }
            else {
                if (formFieldElement.type === 'radio') {
                    if ("checked" in formFieldElement) {
                        if (field.FieldId.endsWith('UnCheck')) {
                            formFieldElement.checked = field.Value == "false";
                        }
                        else if (field.FieldId.endsWith('No')) {
                            formFieldElement.checked = field.Value == "false";
                        }
                        else if (field.FieldId.endsWith('None')) {
                            formFieldElement.checked = field.Value == "false";
                        }
                        else if (field.FieldId.endsWith('Unknown')) {
                            formFieldElement.checked = field.Value != "false" && field.Value != "true";
                        }
                        else {
                            formFieldElement.checked = field.Value === "true";
                        }
                    }
                }
                else if (formFieldElement.type === 'checkbox') {
                    if ("checked" in formFieldElement) {
                        formFieldElement.checked = field.Value === 'true';
                    }
                }
                else {
                    formFieldElement.value = field.Value;
                }
            }
        }
    });
    formFields.forEach(field => {
        let formFieldElement = document.getElementById(field.FieldId);
        if (formFieldElement) {
            formFieldElement.addEventListener('change', (event) => {
                let changedValue = event.target.value;
                if (formFieldElement.type === 'radio') {
                    if ("checked" in event.target) {
                        field.Value = event.target.checked.toString();
                        formFieldElement.value = field.Value;
                        formFields.forEach(otherField => {
                            if (otherField.FieldId !== field.FieldId &&
                                otherField.FieldId.startsWith(formFieldElement.name)) {
                                otherField.Value = 'false';
                                let otherFormFieldElement = document.getElementById(otherField.FieldId);
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
    formSwitch(true);
    highLightIterators();
    const divWakeUp = document.getElementById("wakeUpDiv");
    const radioWakeUpStrokeCheck = document.getElementById("wakeUpStrokeCheck");
    const radioWakeUpDateVerification = document.getElementById("wakeUpDateVerification");
    radioWakeUpStrokeCheck.addEventListener("change", function () {
        if (this.checked) {
            divWakeUp.style.display = "grid";
            radioWakeUpDateVerification.style.display = 'flex';
        }
    });
    const radioWakeUpStrokeUnChecked = document.getElementById("wakeUpStrokeUnCheck");
    radioWakeUpStrokeUnChecked.addEventListener("change", function () {
        if (this.checked) {
            divWakeUp.style.display = "none";
            radioWakeUpDateVerification.style.display = 'none';
        }
    });
    const radioButtonsMedicalHistory = document.querySelectorAll('input[name="radioMedicalHistory"]');
    const divMedicalHistory = document.getElementById('checkBoxMedicalHistory');
    radioButtonsMedicalHistory.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioMedicalHistoryNone' || this.id === 'radioMedicalHistoryUnknown') && this.value === 'true') {
                divMedicalHistory.style.display = 'none';
            }
            else if (this.value === 'true') {
                divMedicalHistory.style.display = 'flex';
            }
        });
    });
    const radioButtonsTreatment = document.querySelectorAll('input[name="radioTreatmentEvent"]');
    const divTreatment = document.getElementById('checkBoxTreatment');
    radioButtonsTreatment.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioTreatmentEventNone' || this.id === 'radioTreatmentEventUnknown') && this.value === 'true') {
                divTreatment.style.display = 'none';
            }
            else if (this.value === 'true') {
                divTreatment.style.display = 'flex';
            }
        });
    });
    const glucoseInput = document.getElementById('glucose');
    const nullButtonGlucose = document.getElementById('nullButtonGlucose');
    nullButtonGlucose.addEventListener('click', () => {
        glucoseInput.value = '';
        const fieldToUpdate = formFields.find(field => field.FieldId === glucoseInput.id);
        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });
    const cholesterolInput = document.getElementById('cholesterol');
    const nullButtonholeCholesterol = document.getElementById('nullButtonCholesterol');
    nullButtonholeCholesterol.addEventListener('click', () => {
        cholesterolInput.value = '';
        const fieldToUpdate = formFields.find(field => field.FieldId === cholesterolInput.id);
        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });
    const nihssInput = document.getElementById('nihss');
    const nullButtonholeNihss = document.getElementById('nullButtonNihss');
    nullButtonholeNihss.addEventListener('click', () => {
        nihssInput.value = '';
        const fieldToUpdate = formFields.find(field => field.FieldId === nihssInput.id);
        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });
    const radioButtonsInfarcts = document.querySelectorAll('input[name="radioInfarcts"]');
    const divInfarcts = document.getElementById('checkBoxInfarcts');
    radioButtonsInfarcts.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioInfarctsNo') && this.value === 'true') {
                divInfarcts.style.display = 'none';
            }
            else if (this.value === 'true') {
                divInfarcts.style.display = 'flex';
            }
        });
    });
    const radioButtonsArterial = document.querySelectorAll('input[name="radioArterial"]');
    const divArterial = document.getElementById('checkBoxArterial');
    radioButtonsArterial.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioArterialNo') && this.value === 'true') {
                divArterial.style.display = 'none';
            }
            else if (this.value === 'true') {
                divArterial.style.display = 'flex';
            }
        });
    });
    const divThrombolysisSelect = document.getElementById("thrombolysisSelectDiv");
    const divThrombolysis = document.getElementById("thrombolysisDiv");
    const thrombolysisCheckDiv = document.getElementById("thrombolysisCheckDiv");
    const radioThrombolysisCheck = document.getElementById("radioThrombolysisCheck");
    radioThrombolysisCheck.addEventListener("change", function () {
        if (this.checked) {
            divThrombolysisSelect.style.display = "none";
            divThrombolysis.style.display = "none";
            thrombolysisCheckDiv.style.display = "flex";
        }
    });
    const radioThrombolysisUnChecked = document.getElementById("radioThrombolysisUnCheck");
    radioThrombolysisUnChecked.addEventListener("change", function () {
        if (this.checked) {
            divThrombolysisSelect.style.display = "grid";
            divThrombolysis.style.display = "flex";
            thrombolysisCheckDiv.style.display = "none";
        }
    });
    const divThrombectomy = document.getElementById("thrombectomyDiv");
    const divThrombectomyTime = document.getElementById("thrombectomyTimeDiv");
    const thrombectomyDiv = document.getElementById("thrombectomyCheckDiv");
    const radioThrombectomyCheck = document.getElementById("thrombectomyCheck");
    radioThrombectomyCheck.addEventListener("change", function () {
        if (this.checked) {
            divThrombectomy.style.display = "none";
            divThrombectomyTime.style.display = "none";
            thrombectomyDiv.style.display = "flex";
        }
    });
    const radioThrombectomyUnCheck = document.getElementById("thrombectomyUnCheck");
    radioThrombectomyUnCheck.addEventListener("change", function () {
        if (this.checked) {
            divThrombectomy.style.display = "grid";
            divThrombectomyTime.style.display = "block";
            thrombectomyDiv.style.display = "none";
        }
    });
    const radioButtonsThrombectomy = document.querySelectorAll('input[name="radioComplicationThrombectomy"]');
    const divThrombectomys = document.getElementById('checkBoxThrombectomy');
    radioButtonsThrombectomy.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioComplicationThrombectomyNo') && this.value === 'true') {
                divThrombectomys.style.display = 'none';
            }
            else if (this.value === 'true') {
                divThrombectomys.style.display = 'flex';
            }
        });
    });
    const radioButtonsBleedingReason = document.querySelectorAll('input[name="radioBleedingReason"]');
    const divBleedingReason = document.getElementById('checkBoxBleedingReason');
    radioButtonsBleedingReason.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioBleedingReasonNo') && this.value === 'true') {
                divBleedingReason.style.display = 'none';
            }
            else if (this.value === 'true') {
                divBleedingReason.style.display = 'flex';
            }
        });
    });
    const radioButtonsNeurosurgery = document.querySelectorAll('input[name="radioNeurosurgery"]');
    const divNeurosurgery = document.getElementById('checkBoxNeurosurgery');
    radioButtonsNeurosurgery.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioNeurosurgeryNo') && this.value === 'true') {
                divNeurosurgery.style.display = 'none';
            }
            else if (this.value === 'true') {
                divNeurosurgery.style.display = 'flex';
            }
        });
    });
    const radioButtonsIntervention = document.querySelectorAll('input[name="radioIntervention"]');
    const divIntervention = document.getElementById('checkBoxIntervention');
    radioButtonsIntervention.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioInterventionNo') && this.value === 'true') {
                divIntervention.style.display = 'none';
            }
            else if (this.value === 'true') {
                divIntervention.style.display = 'flex';
            }
        });
    });
    const radioButtonsTreatmentPerformed = document.querySelectorAll('input[name="radioTreatmentPerformed"]');
    const divTreatmentPerformed = document.getElementById('checkBoxTreatmentPerformed');
    radioButtonsTreatmentPerformed.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioTreatmentPerformedNo') && this.value === 'true') {
                divTreatmentPerformed.style.display = 'none';
            }
            else if (this.value === 'true') {
                divTreatmentPerformed.style.display = 'flex';
            }
        });
    });
    const divThrombolysisMimic = document.getElementById("strokeMimicDiv");
    const radioThrombolysisMimicCheck = document.getElementById("radioThrombolysisMimicCheck");
    radioThrombolysisMimicCheck.addEventListener("change", function () {
        if (this.checked) {
            divThrombolysisMimic.style.display = "flex";
        }
    });
    const radioThrombolysisMimicUnChecked = document.getElementById("radioThrombolysisMimicUnCheck");
    radioThrombolysisMimicUnChecked.addEventListener("change", function () {
        if (this.checked) {
            divThrombolysisMimic.style.display = "none";
        }
    });
    const radioButtonsTreatmentPrescribed = document.querySelectorAll('input[name="radioTreatmentPrescribed"]');
    const divTreatmentPrescribed = document.getElementById('checkBoxTreatmentPrescribed');
    radioButtonsTreatmentPrescribed.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioTreatmentPrescribedNo') && this.value === 'true') {
                divTreatmentPrescribed.style.display = 'none';
            }
            else if (this.value === 'true') {
                divTreatmentPrescribed.style.display = 'flex';
            }
        });
    });
    const radioButtonsThromboemolism = document.querySelectorAll('input[name="radioThromboembolism"]');
    const divThromboemolism = document.getElementById('checkBoxThromboembolism');
    radioButtonsThromboemolism.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioThromboembolismNo') && this.value === 'true') {
                divThromboemolism.style.display = 'none';
            }
            else if (this.value === 'true') {
                divThromboemolism.style.display = 'flex';
            }
        });
    });
    const radioButtonsComplications = document.querySelectorAll('input[name="radioStrokeComp"]');
    const divComplications = document.getElementById('checkBoxStrokeComp');
    radioButtonsComplications.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioStrokeCompNo' || this.id === 'radioStrokeCompUnknown') && this.value === 'true') {
                divComplications.style.display = 'none';
            }
            else if (this.value === 'true') {
                divComplications.style.display = 'flex';
            }
        });
    });
    const checkboxNames = ['Arterial', 'MedicalHistory', 'TreatmentEvent', 'Infarcts', 'Thrombectomy', 'BleedingReason', 'Neurosurgery', 'Intervention', 'TreatmentPerformed', 'TreatmentPrescribed'];
    const inputs = document.querySelectorAll('input:not([type="checkbox"]), select');
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            const editedSpan = document.getElementById(input.id.replace(/(Check|UnCheck|Yes|None|Unknown|No)$/, '') + 'Edited');
            const percentageSpan = document.getElementById(input.id.replace(/(Check|UnCheck|Yes|None|Unknown|No)$/, '') + 'Percentage');
            editedSpan.style.display = 'inline';
            percentageSpan.style.display = 'none';
            editedSpan.parentElement.style.backgroundColor = '';
            if (input.id.includes("radio")) {
                checkboxNames.forEach((name) => {
                    if (input.id.includes(name)) {
                        document.getElementById('radio' + name + 'Yes' + 'Percentage').innerText = '';
                        document.getElementById('radio' + name + 'Yes' + 'Percentage').style.backgroundColor = '';
                        document.getElementById('radio' + name + 'No' + 'Percentage') != null ? document.getElementById('radio' + name + 'No' + 'Percentage').innerText = '' : null;
                        document.getElementById('radio' + name + 'No' + 'Percentage') != null ? document.getElementById('radio' + name + 'No' + 'Percentage').style.backgroundColor = '' : null;
                        document.getElementById('radio' + name + 'None' + 'Percentage') != null ? document.getElementById('radio' + name + 'None' + 'Percentage').innerText = '' : null;
                        document.getElementById('radio' + name + 'None' + 'Percentage') != null ? document.getElementById('radio' + name + 'None' + 'Percentage').style.backgroundColor = '' : null;
                        document.getElementById('radio' + name + 'Unknown' + 'Percentage') != null ? document.getElementById('radio' + name + 'Unknown' + 'Percentage').innerText = '' : null;
                        document.getElementById('radio' + name + 'Unknown' + 'Percentage') != null ? document.getElementById('radio' + name + 'Unknown' + 'Percentage').style.backgroundColor = '' : null;
                    }
                });
            }
        });
    });
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('input', () => {
            checkboxNames.forEach((name) => {
                if (checkbox.id.includes(name)) {
                    const editedSpan = document.getElementById('radio' + name + 'Edited');
                    const percentageSpan = document.getElementById('radio' + name + 'Percentage');
                    editedSpan.style.display = 'inline';
                    percentageSpan.style.display = 'none';
                    editedSpan.style.backgroundColor = '';
                    document.getElementById(checkbox.id + 'Percentage').innerText = '';
                    document.getElementById(checkbox.id + 'Percentage').style.backgroundColor = '';
                    document.getElementById('radio' + name + 'Yes' + 'Percentage').innerText = '';
                    document.getElementById('radio' + name + 'Yes' + 'Percentage').style.backgroundColor = '';
                    document.getElementById('radio' + name + 'No' + 'Percentage') != null ? document.getElementById('radio' + name + 'No' + 'Percentage').innerText = '' : null;
                    document.getElementById('radio' + name + 'No' + 'Percentage') != null ? document.getElementById('radio' + name + 'No' + 'Percentage').style.backgroundColor = '' : null;
                    document.getElementById('radio' + name + 'None' + 'Percentage') != null ? document.getElementById('radio' + name + 'None' + 'Percentage').innerText = '' : null;
                    document.getElementById('radio' + name + 'None' + 'Percentage') != null ? document.getElementById('radio' + name + 'None' + 'Percentage').style.backgroundColor = '' : null;
                    document.getElementById('radio' + name + 'Unknown' + 'Percentage') != null ? document.getElementById('radio' + name + 'Unknown' + 'Percentage').innerText = '' : null;
                    document.getElementById('radio' + name + 'Unknown' + 'Percentage') != null ? document.getElementById('radio' + name + 'Unknown' + 'Percentage').style.backgroundColor = '' : null;
                }
            });
        });
    });
    const allFormFields = document.querySelectorAll('input, select');
    allFormFields.forEach((field) => {
        triggerChangeEvent(field);
    });
}
//# sourceMappingURL=discharge-importer-form.js.map