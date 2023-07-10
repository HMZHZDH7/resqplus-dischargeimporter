var formFields = [
    { TextId: "", FieldId: "age", TrustCount: 10, Verified: false, Value: "10", Edited: false },
    { TextId: "", FieldId: "sex", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "wakeUpStrokeCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "wakeUpStrokeUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "wakeUpDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "strokeCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "strokeUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "firstAttented", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "arrivalDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "arrivalTime", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "onsetDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "onsetTime", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "arrivedFrom", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "hospitalizedIn", TrustCount: NaN, Verified: false, Value: "2", Edited: false },
    { TextId: "", FieldId: "department", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioMedicalHistoryYes", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "radioMedicalHistoryNone", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioMedicalHistoryUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryHypertension", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryDiabetes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryHyperlipidemia", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryActiveSmoker", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryPreviousIschemic", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryPreviousHemorrhage", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryAtrialFibrillation", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryCoronaryArtery", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryCongestiveHeartFailure", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryHIV", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxMedicalHistoryCOVIDPositive", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioTreatmentEventYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioTreatmentEventNone", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioTreatmentEventUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentEventAntidiabetics", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentEventAntihypertensives", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentEventAntiplatelets", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentEventAnticoagulants", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentEventHormonalContraception", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentEventStatin", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "glucose", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "cholesterol", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "systolic", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "diastolic", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "nihss", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "mrs", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "firstInrTesting", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "coma", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "brainImaging", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "imagingDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "imagingTime", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioInfarctsYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioInfarctsNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxInfarctsCortical", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxInfarctsSubCortical", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxBrainstem", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "strokeType", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "aspectScore", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioArterialYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioArterialNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialMCA1Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialMCA2Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialMCA3Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialACA", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialPCA1Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialPCA2Left", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialCEALeft", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialCIALeft", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialVertebral", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialMCA1Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialMCA2Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialMCA3Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialACARight", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialPCA1Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialPCA2Right", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialCEARight", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialCIARight", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxArterialBasilar", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "thrombolysisCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "thrombolysisUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "thrombolysisReason", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "thrombolysisDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "drugUsed", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioAnticoagulantYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioAnticoagulantNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "treatmentDose", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "bolusDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "thrombolysisGiven", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "thrombectomyCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "thrombectomyUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "thrombectomyReason", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "thrombectomyDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "groinDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "mTICIScore", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "reperfusionDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioThrombectomyYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioThrombectomyNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxThrombectomyVesselPerforation", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxThrombectomyDissection", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxThrombectomyEmbolization", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxThrombectomyHematoma", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxThrombectomyOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "bleedingVolume", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "infratentorialCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "infratentorialUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "bleedingCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "bleedingUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "intraventricularCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "intraventricularUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "radioBleedingReasonYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioBleedingReasonNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxBleedingReasonArterialHypertension", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxBleedingReasonAneurysm", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxBleedingReasonArteriovenousMalformation", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxBleedingReasonAnticoagulationTherapy", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxBleedingReasonAmyloidAngiopathy", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxBleedingReasonOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "antidoteAnticoagulants", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioNeurosurgeryYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioNeurosurgeryNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxNeurosurgeryIntracranialHematomaEvacuation", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxNeurosurgeryExternalVentricularDrainage", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxNeurosurgeryDecompresiveCraniectomy", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "clinicalSymptoms", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "symptomsDuration", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "bleedingSubarachnoidCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "bleedingSubarachnoidUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "huntHess", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioInterventionYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioInterventionNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxInterventionEndovascular", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxInterventionNeurosurgical", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxInterventionVentricularDrainage", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxInterventionDecompressiveCraniectomy", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxInterventionOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "nimodipineTreatment", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioTreatmentPerformedYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioTreatmentPerformedNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPerformedAnticoagulation", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPerformedThrombectomy", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPerformedThrombolysis", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPerformedNeurosurgical", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "thrombolysisMimicCheck", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "thrombolysisMimicUnCheck", TrustCount: NaN, Verified: false, Value: "true", Edited: false },
    { TextId: "", FieldId: "drugUsedThrombolysis", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioAnticoagulantMimicsYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioAnticoagulantMimicsNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "treatmentDoseMimics", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "bolusMimicDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "finalDiagnosis", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "ctmrPerfusion", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "coreVolume", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "hypoperfusionVolume", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "dischargeDestination", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "dischargeDestinationFacility", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "dischargeFacility", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "dischargeDate", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "mrsScore", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "discharge", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioTreatmentPrescribedYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioTreatmentPrescribedNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAntidiabetics", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAntihypertensives", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAntiplatelets", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAnticoagulants", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedAnticoagulantPlanned", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedStatin", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkBoxTreatmentPrescribedOther", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "appointmentScheduled", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "smokingCessation", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "hospitalised24Hour", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioVentilated", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioVentilatedEventYes", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioVentilatedEventNo", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioCraniectomy", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioCraniectomyEventYes", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioCraniectomyEventNo", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radiothromboembolismYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radiothromboembolismNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkradiothromboembolismUFH", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkradiothromboembolismLMWH", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkradiothromboembolismIPC", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkradiothromboembolismGCS", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkradiothromboembolismVTE", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkradiothromboembolismVFP", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkradiothromboembolismXaVTE", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkradiothromboembolismOther", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "radioStrokeCompYes", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioStrokeCompNo", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "radioStrokeCompUnknown", TrustCount: NaN, Verified: false, Value: "false", Edited: false },
    { TextId: "", FieldId: "checkRadioStrokeCompPneumonia", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkRadioStrokeCompDVT", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkRadioStrokeCompPulmonary", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkRadioStrokeCompUrinary", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkRadioStrokeCompSores", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkRadioStrokeCompSepsis", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkRadioStrokeCompReccurence", TrustCount: NaN, Verified: false, Value: "", Edited: false },
    { TextId: "", FieldId: "checkRadioStrokeCompOther", TrustCount: NaN, Verified: false, Value: "", Edited: false },
];
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    var textarea = document.getElementById('note-editor-textarea');
    formFields.forEach(function (field) {
        var formFieldElement = document.getElementById(field.FieldId);
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
    formFields.forEach(function (field) {
        var formFieldElement = document.getElementById(field.FieldId);
        if (formFieldElement) {
            formFieldElement.addEventListener('change', function (event) {
                var changedValue = event.target.value;
                if (formFieldElement.type === 'radio') {
                    if ("checked" in event.target) {
                        field.Value = event.target.checked.toString();
                        formFieldElement.value = field.Value;
                        formFields.forEach(function (otherField) {
                            if (otherField.FieldId !== field.FieldId &&
                                otherField.FieldId.startsWith(formFieldElement.name)) {
                                otherField.Value = 'false';
                                var otherFormFieldElement = document.getElementById(otherField.FieldId);
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
        textarea.style.height = "".concat(textarea.scrollHeight, "px");
    }
    textarea.addEventListener('input', updateTextareaHeight);
    window.addEventListener('load', updateTextareaHeight);
    var divWakeUp = document.getElementById("wakeUpDiv");
    var radioWakeUpStrokeCheck = document.getElementById("wakeUpStrokeCheck");
    var radioWakeUpDateVerification = document.getElementById("wakeUpDateVerification");
    radioWakeUpStrokeCheck.addEventListener("change", function () {
        if (this.checked) {
            divWakeUp.style.display = "grid";
            radioWakeUpDateVerification.style.display = 'flex';
        }
    });
    var radioWakeUpStrokeUnChecked = document.getElementById("wakeUpStrokeUnCheck");
    radioWakeUpStrokeUnChecked.addEventListener("change", function () {
        if (this.checked) {
            divWakeUp.style.display = "none";
            radioWakeUpDateVerification.style.display = 'none';
        }
    });
    var divStroke = document.getElementById("strokeDiv");
    var radioButtonsMedicalHistory = document.querySelectorAll('input[name="radioMedicalHistory"]');
    var divMedicalHistory = document.getElementById('checkBoxMedicalHistory');
    radioButtonsMedicalHistory.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioMedicalHistoryNone' || this.id === 'radioMedicalHistoryUnknown') && this.value === 'true') {
                divMedicalHistory.style.display = 'none';
            }
            else if (this.value === 'true') {
                divMedicalHistory.style.display = 'flex';
            }
        });
    });
    var radioButtonsTreatment = document.querySelectorAll('input[name="radioTreatment"]');
    var divTreatment = document.getElementById('checkBoxTreatment');
    radioButtonsTreatment.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioTreatmentEventNone' || this.id === 'radioTreatmentEventUnknown') && this.value === 'true') {
                divTreatment.style.display = 'none';
            }
            else if (this.value === 'true') {
                divTreatment.style.display = 'flex';
            }
        });
    });
    var glucoseInput = document.getElementById('glucose');
    var nullButtonGlucose = document.getElementById('nullButtonGlucose');
    nullButtonGlucose.addEventListener('click', function () {
        glucoseInput.value = '';
        var fieldToUpdate = formFields.find(function (field) { return field.FieldId === glucoseInput.id; });
        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });
    var cholesterolInput = document.getElementById('cholesterol');
    var nullButtonholeCholesterol = document.getElementById('nullButtonCholesterol');
    nullButtonholeCholesterol.addEventListener('click', function () {
        cholesterolInput.value = '';
        var fieldToUpdate = formFields.find(function (field) { return field.FieldId === cholesterolInput.id; });
        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });
    var mrsInput = document.getElementById('mrs');
    var nullButtonholeMrs = document.getElementById('nullButtonMrs');
    var nihssInput = document.getElementById('nihss');
    var nullButtonholeNihss = document.getElementById('nullButtonNihss');
    nullButtonholeNihss.addEventListener('click', function () {
        nihssInput.value = '';
        var fieldToUpdate = formFields.find(function (field) { return field.FieldId === nihssInput.id; });
        if (fieldToUpdate) {
            fieldToUpdate.Value = '';
        }
    });
    var radioButtonsInfarcts = document.querySelectorAll('input[name="radioInfarcts"]');
    var divInfarcts = document.getElementById('checkBoxInfarcts');
    radioButtonsInfarcts.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'infarctsNo') && this.value === 'true') {
                divInfarcts.style.display = 'none';
            }
            else if (this.value === 'true') {
                divInfarcts.style.display = 'flex';
            }
        });
    });
    var radioButtonsArterial = document.querySelectorAll('input[name="radioArterial"]');
    var divArterial = document.getElementById('checkBoxArterial');
    radioButtonsArterial.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioArterialNo') && this.value === 'true') {
                divArterial.style.display = 'none';
            }
            else if (this.value === 'true') {
                divArterial.style.display = 'flex';
            }
        });
    });
    var divThrombolysisSelect = document.getElementById("thrombolysisSelectDiv");
    var divThrombolysis = document.getElementById("thrombolysisDiv");
    var thrombolysisCheckDiv = document.getElementById("thrombolysisCheckDiv");
    var radioThrombolysisCheck = document.getElementById("thrombolysisCheck");
    radioThrombolysisCheck.addEventListener("change", function () {
        if (this.checked) {
            divThrombolysisSelect.style.display = "none";
            divThrombolysis.style.display = "none";
            thrombolysisCheckDiv.style.display = "flex";
        }
    });
    var radioThrombolysisUnChecked = document.getElementById("thrombolysisUnCheck");
    radioThrombolysisUnChecked.addEventListener("change", function () {
        if (this.checked) {
            divThrombolysisSelect.style.display = "grid";
            divThrombolysis.style.display = "flex";
            thrombolysisCheckDiv.style.display = "none";
        }
    });
    var divThrombectomy = document.getElementById("thrombectomyDiv");
    var divThrombectomyTime = document.getElementById("thrombectomyTimeDiv");
    var thrombectomyDiv = document.getElementById("thrombectomyCheckDiv");
    var radioThrombectomyCheck = document.getElementById("thrombectomyCheck");
    radioThrombectomyCheck.addEventListener("change", function () {
        if (this.checked) {
            divThrombectomy.style.display = "none";
            divThrombectomyTime.style.display = "none";
            thrombectomyDiv.style.display = "flex";
        }
    });
    var radioThrombectomyUnCheck = document.getElementById("thrombectomyUnCheck");
    radioThrombectomyUnCheck.addEventListener("change", function () {
        if (this.checked) {
            divThrombectomy.style.display = "grid";
            divThrombectomyTime.style.display = "block";
            thrombectomyDiv.style.display = "none";
        }
    });
    var radioButtonsThrombectomy = document.querySelectorAll('input[name="radioComplicationThrombectomy"]');
    var divThrombectomys = document.getElementById('checkBoxThrombectomy');
    radioButtonsThrombectomy.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioComplicationThrombectomyNo') && this.value === 'true') {
                divThrombectomys.style.display = 'none';
            }
            else if (this.value === 'true') {
                divThrombectomys.style.display = 'flex';
            }
        });
    });
    var radioButtonsBleedingReason = document.querySelectorAll('input[name="radioBleedingReason"]');
    var divBleedingReason = document.getElementById('checkBoxBleedingReason');
    radioButtonsBleedingReason.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioBleedingReasonNo') && this.value === 'true') {
                divBleedingReason.style.display = 'none';
            }
            else if (this.value === 'true') {
                divBleedingReason.style.display = 'flex';
            }
        });
    });
    var radioButtonsNeurosurgery = document.querySelectorAll('input[name="radioNeurosurgery"]');
    var divNeurosurgery = document.getElementById('checkBoxNeurosurgery');
    radioButtonsNeurosurgery.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioNeurosurgeryNo') && this.value === 'true') {
                divNeurosurgery.style.display = 'none';
            }
            else if (this.value === 'true') {
                divNeurosurgery.style.display = 'flex';
            }
        });
    });
    var radioButtonsIntervention = document.querySelectorAll('input[name="radioIntervention"]');
    var divIntervention = document.getElementById('checkBoxIntervention');
    radioButtonsIntervention.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioInterventionNo') && this.value === 'true') {
                divIntervention.style.display = 'none';
            }
            else if (this.value === 'true') {
                divIntervention.style.display = 'flex';
            }
        });
    });
    var radioButtonsTreatmentPerformed = document.querySelectorAll('input[name="radioTreatmentPerformed"]');
    var divTreatmentPerformed = document.getElementById('checkBoxTreatmentPerformed');
    radioButtonsTreatmentPerformed.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioTreatmentPerformedNo') && this.value === 'true') {
                divTreatmentPerformed.style.display = 'none';
            }
            else if (this.value === 'true') {
                divTreatmentPerformed.style.display = 'flex';
            }
        });
    });
    var divThrombolysisMimic = document.getElementById("strokeMimicDiv");
    var radioThrombolysisMimicCheck = document.getElementById("thrombolysisMimicCheck");
    radioThrombolysisMimicCheck.addEventListener("change", function () {
        if (this.checked) {
            divThrombolysisMimic.style.display = "flex";
        }
    });
    var radioThrombolysisMimicUnChecked = document.getElementById("thrombolysisMimicUnCheck");
    radioThrombolysisMimicUnChecked.addEventListener("change", function () {
        if (this.checked) {
            divThrombolysisMimic.style.display = "none";
        }
    });
    var radioButtonsTreatmentPrescribed = document.querySelectorAll('input[name="radioTreatmentPrescribed"]');
    var divTreatmentPrescribed = document.getElementById('checkBoxTreatmentPrescribed');
    radioButtonsTreatmentPrescribed.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioTreatmentPrescribedNo') && this.value === 'true') {
                divTreatmentPrescribed.style.display = 'none';
            }
            else if (this.value === 'true') {
                divTreatmentPrescribed.style.display = 'flex';
            }
        });
    });
    var radioButtonsThromboemolism = document.querySelectorAll('input[name="radiothromboembolism"]');
    var divThromboemolism = document.getElementById('checkradiothromboembolism');
    radioButtonsThromboemolism.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radiothromboembolismNo') && this.value === 'true') {
                divThromboemolism.style.display = 'none';
            }
            else if (this.value === 'true') {
                divThromboemolism.style.display = 'flex';
            }
        });
    });
    var radioButtonsComplications = document.querySelectorAll('input[name="radioStrokeComp"]');
    var divComplications = document.getElementById('checkRadioStrokeComp');
    radioButtonsComplications.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            if ((this.id === 'radioStrokeCompNo' || this.id === 'radioStrokeCompUnknown') && this.value === 'true') {
                divComplications.style.display = 'none';
            }
            else if (this.value === 'true') {
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
    var inputs = document.querySelectorAll('input, select');
    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            var editedSpan = document.getElementById(input.id.replace(/(Check|UnCheck|Yes|None|Unknown|No)$/, '') + 'Edited');
            var percentageSpan = document.getElementById(input.id.replace(/(Check|UnCheck|Yes|None|Unknown|No)$/, '') + 'Percentage');
            editedSpan.style.display = 'inline';
            percentageSpan.style.display = 'none';
        });
    });
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkboxNames = ['Arterial', 'MedicalHistory', 'TreatmentEvent', 'Infarcts', 'Thrombectomy', 'BleedingReason', 'Neurosurgery', 'Intervention', 'TreatmentPerformed', 'TreatmentPrescribed'];
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('input', function () {
            checkboxNames.forEach(function (name) {
                if (checkbox.id.includes(name)) {
                    var editedSpan = document.getElementById('radio' + name + 'Edited');
                    var percentageSpan = document.getElementById('radio' + name + 'Percentage');
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
    document.getElementById("agePercentage").innerText = formFields.find(function (o) { return o.FieldId == 'age'; }).TrustCount.toString() + " %";
    document.getElementById("sexPercentage").innerText = formFields.find(function (o) { return o.FieldId == 'sex'; }).TrustCount.toString() + " %";
    document.getElementById("wakeUpDatePercentage").innerText = formFields.find(function (o) { return o.FieldId == 'wakeUpDate'; }).TrustCount.toString() + " %";
    document.getElementById("strokePercentage").innerText = ((_a = [formFields.find(function (o) { return o.FieldId === 'strokeCheck'; }).TrustCount, formFields.find(function (o) { return o.FieldId === 'strokeUnCheck'; }).TrustCount].filter(function (tc) { return !isNaN(tc); }).sort(function (a, b) { return b - a; })[0]) === null || _a === void 0 ? void 0 : _a.toString()) || "";
    document.getElementById("wakeUpStrokePercentage").innerText = ((_b = [formFields.find(function (o) { return o.FieldId === 'wakeUpStrokeCheck'; }).TrustCount, formFields.find(function (o) { return o.FieldId === 'wakeUpStrokeUnCheck'; }).TrustCount].filter(function (tc) { return !isNaN(tc); }).sort(function (a, b) { return b - a; })[0]) === null || _b === void 0 ? void 0 : _b.toString()) || "";
    document.getElementById("firstAttentedPercentage").innerText = formFields.find(function (o) { return o.FieldId == 'firstAttented'; }).TrustCount.toString() + " %";
    document.getElementById("radioMedicalHistoryYesPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'radioMedicalHistoryYes'; }).TrustCount.toString() + " %";
    document.getElementById("radioMedicalHistoryNonePercentage").innerText = formFields.find(function (o) { return o.FieldId === 'radioMedicalHistoryNone'; }).TrustCount.toString() + " %";
    document.getElementById("radioMedicalHistoryUnknownPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'radioMedicalHistoryUnknown'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryHypertensionPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryHypertension'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryDiabetesPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryDiabetes'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryHyperlipidemiaPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryHyperlipidemia'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryActiveSmokerPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryActiveSmoker'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryPreviousIschemicPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryPreviousIschemic'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryPreviousHemorrhagePercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryPreviousHemorrhage'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryAtrialFibrillationPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryAtrialFibrillation'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryCoronaryArteryPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryCoronaryArtery'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryCongestiveHeartFailurePercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryCongestiveHeartFailure'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryHIVPercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryHIV'; }).TrustCount.toString() + " %";
    document.getElementById("checkBoxMedicalHistoryCOVIDPositivePercentage").innerText = formFields.find(function (o) { return o.FieldId === 'checkBoxMedicalHistoryCOVIDPositive'; }).TrustCount.toString() + " %";
    var allFormFields = document.querySelectorAll('input, select');
    allFormFields.forEach(function (field) {
        triggerChangeEvent(field);
    });
});
function changeColor() {
    var inputElement = document.getElementById("age");
    applyWarningStyle(inputElement);
}
function resetColor() {
    var inputElement = document.getElementById("age");
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
    var divs = document.querySelectorAll("[id^='imagingDiv']");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.style.display = "none";
    }
    var selectedDiv = document.getElementById("imagingDiv" + value);
    if (selectedDiv) {
        selectedDiv.style.display = "flex";
    }
}
function toggleSubDiv(value) {
    var divs = document.querySelectorAll("[id^='imagingSubDiv']");
    var imagingDiv = document.getElementById("imagingDiv");
    var infarctsDiv = document.getElementById("infarctsDiv");
    var perfusionDeficitDiv = document.getElementById("perfusionDeficitDiv");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.style.display = "block";
        imagingDiv.style.display = "block";
        infarctsDiv.style.display = "block";
        perfusionDeficitDiv.style.display = "none";
    }
    var selectedDiv = document.getElementById("imagingSubDiv");
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
function mticiToggle(value) {
    var divs = document.querySelectorAll("[id^='mticiDiv']");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.style.display = "block";
    }
    var selectedDiv = document.getElementById("mticiDiv");
    if (value == "0") {
        selectedDiv.style.display = "none";
    }
}
function thrombolysisTimeToggle(value) {
    var divs = document.querySelectorAll("[id^='thrombolysisDiv']");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.style.display = "none";
    }
    var selectedDiv = document.getElementById("thrombolysisDiv");
    if (value == "6") {
        selectedDiv.style.display = "block";
    }
}
function thrombectomyTimeToggle(value) {
    var divs = document.querySelectorAll("[id^='thrombectomyTimeDiv']");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.style.display = "none";
    }
    var selectedDiv = document.getElementById("thrombectomyTimeDiv");
    if (value == "8") {
        selectedDiv.style.display = "block";
    }
}
function perfusionDeficitToggle(value) {
    var divs = document.querySelectorAll("[id^='perfusionDeficit']");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        div.style.display = "flex";
    }
    var selectedDiv = document.getElementById("perfusionDeficit");
    if (value == "4" || value == "5") {
        selectedDiv.style.display = "none";
    }
}
function dischargeDestinationToggle(value) {
    var withinDiv = document.getElementById("withinTransferred");
    var transferredDiv = document.getElementById("centerTransferred");
    withinDiv.style.display = "none";
    transferredDiv.style.display = "none";
    if (value == "2") {
        withinDiv.style.display = "block";
    }
    if (value == "3") {
        transferredDiv.style.display = "block";
    }
}
function triggerChangeEvent(element) {
    var event = new Event('change', { bubbles: true });
    element.dispatchEvent(event);
}
function toggleVerification(id, ids, checkBoxIds) {
    if (ids === void 0) { ids = []; }
    if (checkBoxIds === void 0) { checkBoxIds = []; }
    document.getElementById("verify-" + id).style.display = "none";
    document.getElementById("edit-" + id).style.display = "inline";
    if (ids && ids.length > 0) {
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
            var id_1 = ids_1[_i];
            document.getElementById(id_1).disabled = true;
        }
        if (checkBoxIds && checkBoxIds.length > 0) {
            for (var _a = 0, checkBoxIds_1 = checkBoxIds; _a < checkBoxIds_1.length; _a++) {
                var checkBoxId = checkBoxIds_1[_a];
                document.getElementById(checkBoxId).disabled = true;
            }
        }
    }
    else {
        document.getElementById(id).disabled = true;
    }
}
function toggleEdit(id, ids, checkBoxIds) {
    if (ids === void 0) { ids = []; }
    if (checkBoxIds === void 0) { checkBoxIds = []; }
    document.getElementById("verify-" + id).style.display = "inline";
    document.getElementById("edit-" + id).style.display = "none";
    if (ids && ids.length > 0) {
        for (var _i = 0, ids_2 = ids; _i < ids_2.length; _i++) {
            var id_2 = ids_2[_i];
            document.getElementById(id_2).disabled = false;
        }
        if (checkBoxIds && checkBoxIds.length > 0) {
            for (var _a = 0, checkBoxIds_2 = checkBoxIds; _a < checkBoxIds_2.length; _a++) {
                var checkBoxId = checkBoxIds_2[_a];
                document.getElementById(checkBoxId).disabled = false;
            }
        }
    }
    else {
        document.getElementById(id).disabled = false;
    }
}
//# sourceMappingURL=discharge-importer-form.js.map