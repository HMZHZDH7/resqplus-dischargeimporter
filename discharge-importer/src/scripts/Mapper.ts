interface map {
    docMarkerId: string;
    FormId: string;
    HighLightId: string;
}

export const mapper: map[] = [
    { FormId: "age",  docMarkerId:"anamnesis_age", HighLightId: "anamnesis.age"},
    { FormId: "sex", docMarkerId:"anamnesis_sex", HighLightId: "anamnesis.sex"},
    { FormId: "wakeUpStrokeCheck",  docMarkerId:"onset_wakeup_stroke", HighLightId: "onset.wakeup_stroke"},
    { FormId: "wakeUpStrokeUnCheck", docMarkerId:"onset_wakeup_stroke", HighLightId: "onset.wakeup_stroke"},
    { FormId: "wakeUpdate", docMarkerId:"onset_sleep_timestamp", HighLightId: ""},
    { FormId: "strokeCheck",  docMarkerId:"onset_inhospital_stroke", HighLightId: "onset.inhospital_stroke"},
    { FormId: "strokeUnCheck", docMarkerId:"onset_inhospital_stroke", HighLightId: "onset.inhospital_stroke"},
    { FormId: "firstAttented", docMarkerId:"admission_first_contact_place", HighLightId: ""},
    { FormId: "arrivalDate", docMarkerId:"admission_admission_timestamp", HighLightId: "admission.admission_timestamp"},
    { FormId: "arrivalTime", docMarkerId:"admission_admission_timestamp", HighLightId: "admission.admission_timestamp"},
    { FormId: "onsetDate", docMarkerId:"onset_onset_timestamp", HighLightId: "onset.onset_timestamp"},
    { FormId: "onsetTime", docMarkerId:"onset_onset_timestamp", HighLightId: "onset.onset_timestamp"},
    { FormId: "arrivedFrom", docMarkerId:"admission_arrival_mode", HighLightId: "admission.arrival_mode"},
    { FormId: "hospitalizedIn",  docMarkerId:"admission_hospitalized_in", HighLightId: "admission.hospitalized_in"},
    { FormId: "department", docMarkerId:"admission_admission_department", HighLightId: "admission.admission_department"},
    { FormId: "radioMedicalHistoryYes", docMarkerId:"anamnesis_risk_factors", HighLightId: ""},
    { FormId: "radioMedicalHistoryNone",  docMarkerId:"anamnesis_risk_factors", HighLightId: ""},
    { FormId: "radioMedicalHistoryUnknown",  docMarkerId:"anamnesis_risk_factors", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryHypertension", docMarkerId:"anamnesis_risk_factors_hypertension", HighLightId: "anamnesis.risk_factors.hypertension"},
    { FormId: "checkBoxMedicalHistorydiabetes",  docMarkerId:"anamnesis_risk_factors_diabetes", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryHyperlipidemia",  docMarkerId:"anamnesis_risk_factors_hyperlypidemia", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryActiveSmoker",  docMarkerId:"anamnesis_risk_factors_active_smoker", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryPreviousIschemic",  docMarkerId:"anamnesis_risk_factors_ischemic_stroke", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryPreviousHemorrhage",  docMarkerId:"anamnesis_risk_factors_hermorrhage_stroke", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryAtrialFibrillation",  docMarkerId:"anamnesis_risk_factors_atrial_fibrillation", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryCoronaryArtery",  docMarkerId:"anamnesis_risk_factors_coronary_artery", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryCongestiveHeartFailure",  docMarkerId:"anamnesis_risk_factors_heart_failure", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryHIV",  docMarkerId:"anamnesis_risk_factors_hiv", HighLightId: ""},
    { FormId: "checkBoxMedicalHistoryCOVIdPositive",  docMarkerId:"anamnesis_risk_factors_covid_positive", HighLightId: ""},
    { FormId: "radioTreatmentEventYes",  docMarkerId:"anamnesis_medication_any_medication", HighLightId: ""},
    { FormId: "radioTreatmentEventNone",  docMarkerId:"anamnesis_medication_any_medication", HighLightId: ""},
    { FormId: "radioTreatmentEventUnknown",  docMarkerId:"anamnesis_medication_any_medication", HighLightId: ""},
    { FormId: "checkBoxTreatmentEventAntidiabetics",  docMarkerId:"anamnesis_medication_antidiabetics", HighLightId: ""},
    { FormId: "checkBoxTreatmentEventAntihypertensives",  docMarkerId:"anamnesis_medication_antihypertensives", HighLightId: "anamnesis.medication.antihypertensives"},
    { FormId: "checkBoxTreatmentEventAntiplatelets",  docMarkerId:"anamnesis_medication_antiplatelets", HighLightId: ""},
    { FormId: "checkBoxTreatmentEventAntiplatelets",  docMarkerId:"anamnesis_medication_antiplatelets", HighLightId: ""},
    { FormId: "checkBoxTreatmentEventAnticoagulants",  docMarkerId:"anamnesis_medication_anticoagulants", HighLightId: ""},
    { FormId: "checkBoxTreatmentEventHormonalContraception",  docMarkerId:"anamnesis_medication_hormonal_contraception", HighLightId: ""},
    { FormId: "checkBoxTreatmentEventStatin",  docMarkerId:"anamnesis_medication_statin", HighLightId: ""},
    { FormId: "glucose", docMarkerId:"admission_medical_examination_glucose", HighLightId: "admission.medical_examination.glucose"},
    { FormId: "cholesterol", docMarkerId:"admission_medical_examination_cholesterol", HighLightId: "admission.medical_examination.cholesterol"},
    { FormId: "systolic", docMarkerId:"admission_medical_examination_systolic_pressure", HighLightId: "admission.medical_examination.systolic_pressure"},
    { FormId: "diastolic", docMarkerId:"admission_medical_examination_diastolic_pressure", HighLightId: "admission.medical_examination.diastolic_pressure"},
    { FormId: "nihss", docMarkerId:"admission_medical_examination_nihss", HighLightId: "admission.medical_examination.nihss"},
    { FormId: "mrs", docMarkerId:"anamnesis_medication_prestroke_mrs", HighLightId: "anamnesis.prestroke_mrs"},
    { FormId: "firstInrTesting", docMarkerId:"admission_medical_examination_inr_mode", HighLightId: "admission.medical_examination.inr_mode"},

    { FormId: "coma", docMarkerId:"", HighLightId: ""},

    { FormId: "brainImaging", docMarkerId:"diagnosis_imaging_type", HighLightId: "diagnosis.imaging.imaging_type"},
    { FormId: "imagingdate", docMarkerId:"diagnosis_imaging_timestamp", HighLightId: "diagnosis.imaging.imaging_timestamp"},
    { FormId: "imagingTime", docMarkerId:"diagnosis_imaging_timestamp", HighLightId: "diagnosis.imaging.imaging_timestamp"},
    { FormId: "radioInfarctsYes",  docMarkerId:"diagnosis_imaging_old_infarcts_any_infarct", HighLightId: ""},
    { FormId: "radioInfarctsNo",  docMarkerId:"diagnosis_imaging_old_infarcts_any_infarct", HighLightId: ""},
    { FormId: "checkBoxInfarctsCortical",  docMarkerId:"diagnosis_imaging_old_infarcts_cortical", HighLightId: ""},
    { FormId: "checkBoxInfarctsSubCortical",  docMarkerId:"diagnosis_imaging_old_infarcts_subcortical", HighLightId: ""},
    { FormId: "checkBoxBrainstem",  docMarkerId:"diagnosis_imaging_old_infarcts_brainstem", HighLightId: ""},
    { FormId: "strokeType", docMarkerId:"diagnosis_stroke_type", HighLightId: "diagnosis.stroke_type"},

    { FormId: "aspectScore", docMarkerId:"", HighLightId: ""},
    { FormId: "radioArterialYes",  docMarkerId:"", HighLightId: ""},
    { FormId: "radioArterialNo",  docMarkerId:"", HighLightId: ""},

    { FormId: "checkBoxArterialMCA1Left",  docMarkerId:"diagnosis_imaging_occlusion_mca_m1_left", HighLightId: ""},
    { FormId: "checkBoxArterialMCA2Left",  docMarkerId:"diagnosis_imaging_occlusion_mca_m2_left", HighLightId: ""},
    { FormId: "checkBoxArterialMCA3Left",  docMarkerId:"diagnosis_imaging_occlusion_mca_m3_left", HighLightId: ""},
    { FormId: "checkBoxArterialACA",  docMarkerId:"diagnosis_imaging_occlusion_cerebral_artery_left", HighLightId: ""},
    { FormId: "checkBoxArterialPCA1Left",  docMarkerId:"diagnosis_imaging_occlusion_pca_p1_left", HighLightId: ""},
    { FormId: "checkBoxArterialPCA2Left",  docMarkerId:"diagnosis_imaging_occlusion_pca_p2_left", HighLightId: ""},
    { FormId: "checkBoxArterialCEALeft",  docMarkerId:"diagnosis_imaging_occlusion_artery_extracranial_left", HighLightId: ""},
    { FormId: "checkBoxArterialCIALeft",  docMarkerId:"diagnosis_imaging_occlusion_artery_intracranial_left", HighLightId: ""},
    { FormId: "checkBoxArterialVertebral",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxArterialMCA1Right",  docMarkerId:"diagnosis_imaging_occlusion_mca_m1_right", HighLightId: ""},
    { FormId: "checkBoxArterialMCA2Right",  docMarkerId:"diagnosis_imaging_occlusion_mca_m2_right", HighLightId: ""},
    { FormId: "checkBoxArterialMCA3Right",  docMarkerId:"diagnosis_imaging_occlusion_mca_m3_right", HighLightId: ""},
    { FormId: "checkBoxArterialACARight",  docMarkerId:"diagnosis_imaging_occlusion_cerebral_artery_right", HighLightId: ""},
    { FormId: "checkBoxArterialPCA1Right",  docMarkerId:"diagnosis_imaging_occlusion_pca_p1_right", HighLightId: ""},
    { FormId: "checkBoxArterialPCA2Right",  docMarkerId:"diagnosis_imaging_occlusion_pca_p2_right", HighLightId: ""},
    { FormId: "checkBoxArterialCEARight",  docMarkerId:"diagnosis_imaging_occlusion_artery_extracranial_right", HighLightId: ""},
    { FormId: "checkBoxArterialCIARight",  docMarkerId:"diagnosis_imaging_occlusion_artery_intracranial_right", HighLightId: ""},
    { FormId: "checkBoxArterialBasilar",  docMarkerId:"diagnosis_imaging_occlusion_basilar_artery", HighLightId: ""},
    { FormId: "radioThrombolysisCheck",  docMarkerId:"treatment_thrombolysis_thrombolysis_treatment", HighLightId: "treatment.thrombolysis.thrombolysis_treatment"},
    { FormId: "radioThrombolysisUnCheck", docMarkerId:"treatment_thrombolysis_thrombolysis_treatment", HighLightId: "treatment.thrombolysis.thrombolysis_treatment"},

    //Not in Docmarker
    { FormId: "thrombolysisReason", docMarkerId:"", HighLightId: ""},
    { FormId: "thrombolysisDate", docMarkerId:"", HighLightId: ""},

    { FormId: "drugUsed", docMarkerId:"treatment_thrombolysis_drug", HighLightId: ""},

    //This is using the same field
    { FormId: "radioAnticoagulantYes",  docMarkerId:"treatment_thrombolysis_antidote_given", HighLightId: ""},
    { FormId: "radioAnticoagulantNo",  docMarkerId:"treatment_thrombolysis_antidote_given", HighLightId: ""},

    { FormId: "treatmentDose", docMarkerId:"treatment_thrombolysis_drug_dose", HighLightId: "treatment.thrombolysis.drug_dose"},
    { FormId: "bolusDate", docMarkerId:"treatment_thrombolysis_bolus_timestamp", HighLightId: "treatment.thrombolysis.bolus_timestamp"},

    //same field
    { FormId: "thrombolysisGiven", docMarkerId:"treatment_ischemic_stroke_thrombectomy_treatment", HighLightId: ""},
    { FormId: "thrombectomyCheck",  docMarkerId:"treatment_ischemic_stroke_thrombectomy_treatment", HighLightId: ""},
    { FormId: "thrombectomyUnCheck", docMarkerId:"treatment_ischemic_stroke_thrombectomy_treatment", HighLightId: ""},

    //Not found
    { FormId: "thrombectomyReason", docMarkerId:"", HighLightId: ""},
    { FormId: "thrombectomyDate", docMarkerId:"", HighLightId: ""},

    { FormId: "groinDate", docMarkerId:"treatment_ischemic_stroke_puncture_timestamp", HighLightId: ""},
    { FormId: "mTICIScore", docMarkerId:"treatment_ischemic_stroke_mtici_score", HighLightId: ""},
    { FormId: "reperfusionDate", docMarkerId:"treatment_ischemic_stroke_reperfusion_timestamp", HighLightId: ""},

    //Same field
    { FormId: "radioThrombectomyYes",  docMarkerId:"treatment_ischemic_stroke_mt_complications_any_thrombectomy_complication", HighLightId: ""},
    { FormId: "radioThrombectomyNo",  docMarkerId:"treatment_ischemic_stroke_mt_complications_any_thrombectomy_complication", HighLightId: ""},

    { FormId: "checkBoxThrombectomyVesselPerforation",  docMarkerId:"treatment_ischemic_stroke_mt_complications_perforation", HighLightId: ""},
    { FormId: "checkBoxThrombectomyDissection",  docMarkerId:"treatment_ischemic_stroke_mt_complications_dissection", HighLightId: ""},
    { FormId: "checkBoxThrombectomyEmbolization",  docMarkerId:"treatment_ischemic_stroke_mt_complications_embolization", HighLightId: ""},
    { FormId: "checkBoxThrombectomyHematoma",  docMarkerId:"treatment_ischemic_stroke_mt_complications_hematoma", HighLightId: ""},
    { FormId: "checkBoxThrombectomyOther",  docMarkerId:"treatment_ischemic_stroke_mt_complications_other", HighLightId: ""},
    { FormId: "bleedingVolume", docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_volume", HighLightId: ""},

    { FormId: "infratentorialCheck",  docMarkerId:"", HighLightId: ""},
    { FormId: "infratentorialUnCheck", docMarkerId:"", HighLightId: ""},
    { FormId: "bleedingCheck",  docMarkerId:"", HighLightId: ""},
    { FormId: "bleedingUnCheck", docMarkerId:"", HighLightId: ""},
    { FormId: "intraventricularCheck",  docMarkerId:"", HighLightId: ""},
    { FormId: "intraventricularUnCheck", docMarkerId:"", HighLightId: ""},

    //using the same field
    { FormId: "radioBleedingReasonYes",  docMarkerId:"treatment_bleeding_source_found", HighLightId: ""},
    { FormId: "radioBleedingReasonNo",  docMarkerId:"treatment_bleeding_source_found", HighLightId: ""},

    { FormId: "checkBoxBleedingReasonArterialHypertension",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_hypertension", HighLightId: ""},
    { FormId: "checkBoxBleedingReasonAneurysm",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_aneurysm", HighLightId: ""},
    { FormId: "checkBoxBleedingReasonArteriovenousMalformation",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_malformation", HighLightId: ""},
    { FormId: "checkBoxBleedingReasonAnticoagulationTherapy",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_anticolagulant", HighLightId: ""},
    { FormId: "checkBoxBleedingReasonAmyloidAngiopathy",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_angiopathy", HighLightId: ""},
    { FormId: "checkBoxBleedingReasonOther",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_other", HighLightId: ""},
    { FormId: "antidoteAnticoagulants", docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_antidote", HighLightId: ""},

    //Using same field
    { FormId: "radioNeurosurgeryYes",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_any_treatment", HighLightId: ""},
    { FormId: "radioNeurosurgeryNo",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_any_treatment", HighLightId: ""},

    { FormId: "checkBoxNeurosurgeryIntracranialHematomaEvacuation",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_hematoma_evacuation", HighLightId: ""},
    { FormId: "checkBoxNeurosurgeryExternalVentriculardrainage",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_ventricular_drainage", HighLightId: ""},
    { FormId: "checkBoxNeurosurgerydecompresiveCraniectomy",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_craniectomy", HighLightId: ""},

    { FormId: "clinicalSymptoms", docMarkerId:"", HighLightId: ""},
    { FormId: "symptomsduration", docMarkerId:"", HighLightId: ""},

    //using same filed
    { FormId: "bleedingSubarachnoidCheck",  docMarkerId:"treatment_subarachnoid_hemorrhage_treatment", HighLightId: ""},
    { FormId: "bleedingSubarachnoidUnCheck", docMarkerId:"treatment_subarachnoid_hemorrhage_treatment", HighLightId: ""},

    //Don't have this fields in our JSON
    { FormId: "huntHess", docMarkerId:"", HighLightId: ""},
    { FormId: "radioInterventionYes",  docMarkerId:"", HighLightId: ""},
    { FormId: "radioInterventionNo",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxInterventionEndovascular",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxInterventionNeurosurgical",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxInterventionVentricularDrainage",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxInterventionDecompressiveCraniectomy",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxInterventionOther",  docMarkerId:"", HighLightId: ""},
    { FormId: "nimodipineTreatment", docMarkerId:"", HighLightId: ""},
    { FormId: "radioTreatmentPerformedYes",  docMarkerId:"", HighLightId: ""},
    { FormId: "radioTreatmentPerformedNo",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxTreatmentPerformedAnticoagulation",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxTreatmentPerformedThrombectomy",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxTreatmentPerformedThrombolysis",  docMarkerId:"", HighLightId: ""},
    { FormId: "checkBoxTreatmentPerformedNeurosurgical",  docMarkerId:"", HighLightId: ""},

    { FormId: "radioThrombolysisMimicCheck",  docMarkerId:"treatment_thrombolysis_thrombolysis_treatment", HighLightId: "treatment.thrombolysis.thrombolysis_treatment"},
    { FormId: "radioThrombolysisMimicUnCheck", docMarkerId:"treatment_thrombolysis_thrombolysis_treatment", HighLightId: "treatment.thrombolysis.thrombolysis_treatment"},

    { FormId: "drugUsedThrombolysis", docMarkerId:"treatment_thrombolysis_drug", HighLightId: "treatment.thrombolysis.drug"},
    { FormId: "radioAnticoagulantMimicsYes",  docMarkerId:"treatment_thrombolysis_antidote_given", HighLightId: ""},
    { FormId: "radioAnticoagulantMimicsNo",  docMarkerId:"treatment_thrombolysis_antidote_given", HighLightId: ""},
    { FormId: "treatmentDoseMimics", docMarkerId:"treatment_thrombolysis_drug_dose", HighLightId: "treatment.thrombolysis.drug_dose"},
    { FormId: "bolusMimicDate", docMarkerId:"treatment_thrombolysis_bolus_timestamp", HighLightId: "treatment.thrombolysis.bolus_timestamp"},

    { FormId: "finalDiagnosis", docMarkerId:"", HighLightId: ""},

    { FormId: "ctmrPerfusion", docMarkerId:"diagnosis_imaging_perfusion_perfusion_deficit", HighLightId: ""},
    { FormId: "coreVolume", docMarkerId:"", HighLightId: ""},
    { FormId: "hypoperfusionVolume", docMarkerId:"", HighLightId: ""},

    { FormId: "dischargeDestination", docMarkerId:"discharge_destination_discharge_destination", HighLightId: "discharge.destination.discharge_destination"},

    //not found
    { FormId: "dischargeDestinationFacility", docMarkerId:"", HighLightId: ""},
    { FormId: "dischargeFacility", docMarkerId:"", HighLightId: ""},

    { FormId: "dischargeDate", docMarkerId:"discharge_discharge_date", HighLightId: ""},
    { FormId: "mrsScore", docMarkerId:"discharge_mrs_score", HighLightId: "discharge.mrs_score"},

    //not found
    { FormId: "discharge", docMarkerId:"", HighLightId: ""},
    { FormId: "radioTreatmentPrescribedYes",  docMarkerId:"discharge_any_treatment_prescribed", HighLightId: ""},
    { FormId: "radioTreatmentPrescribedNo",  docMarkerId:"discharge_any_treatment_prescribed", HighLightId: ""},

    { FormId: "checkBoxTreatmentPrescribedAntidiabetics",  docMarkerId:"discharge_medication_antidiabetics", HighLightId: ""},
    { FormId: "checkBoxTreatmentPrescribedAntihypertensives",  docMarkerId:"discharge_medication_antihypertensives", HighLightId: ""},
    { FormId: "checkBoxTreatmentPrescribedAntiplatelets",  docMarkerId:"discharge_medication_antiplatelets", HighLightId: ""},
    { FormId: "checkBoxTreatmentPrescribedAnticoagulants",  docMarkerId:"discharge_medication_anticoagulants", HighLightId: ""},
    { FormId: "checkBoxTreatmentPrescribedAnticoagulantPlanned",  docMarkerId:"discharge_medication_anticoagulant_recommended", HighLightId: ""},
    { FormId: "checkBoxTreatmentPrescribedStatin",  docMarkerId:"discharge_medication_statin", HighLightId: "discharge.medication.statin"},
    { FormId: "checkBoxTreatmentPrescribedOther",  docMarkerId:"discharge_medication_other", HighLightId: ""},
    { FormId: "appointmentScheduled", docMarkerId:"discharge_stroke_management_appointment", HighLightId: "discharge.stroke_management_appointment"},
    { FormId: "smokingCessation", docMarkerId:"discharge_smoking_cessation_recommended", HighLightId: "discharge.smoking_cessation_recommended"},
    { FormId: "hospitalised24Hour", docMarkerId:"discharge_24_hour_hospitalized_time", HighLightId: ""},

    //These use the same field
    { FormId: "radioVentilated", docMarkerId:"post_acute_care_patient_ventilated", HighLightId: ""},
    { FormId: "radioVentilatedYes", docMarkerId:"post_acute_care_patient_ventilated", HighLightId: ""},
    { FormId: "radioVentilatedNo", docMarkerId:"post_acute_care_patient_ventilated", HighLightId: ""},

    //These use the same field
    { FormId: "radioCraniectomy", docMarkerId:"post_acute_care_craniectomy", HighLightId: ""},
    { FormId: "radioCraniectomyYes", docMarkerId:"post_acute_care_craniectomy", HighLightId: ""},
    { FormId: "radioCraniectomyNo", docMarkerId:"post_acute_care_craniectomy", HighLightId: ""},

    //These use the same field
    { FormId: "radiothromboembolismYes",  docMarkerId:"post_acute_care_any_vte", HighLightId: ""},
    { FormId: "radiothromboembolismNo",  docMarkerId:"post_acute_care_any_vte", HighLightId: ""},

    { FormId: "checkBoxthromboembolismUFH", docMarkerId:"post_acute_care_any_vte_ufh", HighLightId: ""},
    { FormId: "checkBoxthromboembolismLMWH", docMarkerId:"post_acute_care_any_vte_lmwh", HighLightId: ""},
    { FormId: "checkBoxthromboembolismIPC", docMarkerId:"post_acute_care_any_vte_ipc", HighLightId: ""},
    { FormId: "checkBoxthromboembolismGCS", docMarkerId:"post_acute_care_any_vte_gcs", HighLightId: ""},
    { FormId: "checkBoxthromboembolismVTE", docMarkerId:"post_acute_care_any_vte_warfarin", HighLightId: ""},
    { FormId: "checkBoxthromboembolismVFP", docMarkerId:"post_acute_care_any_vte_vfp", HighLightId: ""},
    { FormId: "checkBoxthromboembolismXaVTE", docMarkerId:"post_acute_care_any_vte_xa_inhibitor", HighLightId: ""},
    { FormId: "checkBoxthromboembolismOther", docMarkerId:"post_acute_care_any_vte_other", HighLightId: ""},

    //These use the same field
    { FormId: "radioStrokeCompYes",  docMarkerId:"post_acute_care_post_stroke_complications_any_post_stroke_complication", HighLightId: ""},
    { FormId: "radioStrokeCompNo",  docMarkerId:"post_acute_care_post_stroke_complications_any_post_stroke_complication", HighLightId: ""},
    { FormId: "radioStrokeCompUnknown",  docMarkerId:"post_acute_care_post_stroke_complications_any_post_stroke_complication", HighLightId: ""},

    { FormId: "checkBoxStrokeCompPneumonia", docMarkerId:"post_acute_care_post_stroke_complications_pneumonia", HighLightId: ""},
    { FormId: "checkBoxStrokeCompdVT", docMarkerId:"post_acute_care_post_stroke_complications_dvt", HighLightId: ""},
    { FormId: "checkBoxStrokeCompPulmonary", docMarkerId:"post_acute_care_post_stroke_complications_pulmonary_embolism", HighLightId: ""},
    { FormId: "checkBoxStrokeCompUrinary", docMarkerId:"post_acute_care_post_stroke_complications_urinary_infection", HighLightId: ""},
    { FormId: "checkBoxStrokeCompSores", docMarkerId:"post_acute_care_post_stroke_complications_pressure_sores", HighLightId: ""},
    { FormId: "checkBoxStrokeCompSepsis", docMarkerId:"post_acute_care_post_stroke_complications_drip_site_sepsis", HighLightId: ""},
    { FormId: "checkBoxStrokeCompRecurrence", docMarkerId:"post_acute_care_post_stroke_complications_recurrence_or_extension", HighLightId: ""},
    { FormId: "checkBoxStrokeCompOther", docMarkerId:"post_acute_care_post_stroke_complications_other", HighLightId: ""},
]