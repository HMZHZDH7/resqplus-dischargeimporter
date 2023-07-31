interface map {
    docMarkerId: string;
    FormId: string;
}

export const mapper: map[] = [
    { FormId: "age",  docMarkerId:"anamnesis_age"},
    { FormId: "sex", docMarkerId:"anamnesis_sex"},

    //Same field
    { FormId: "wakeUpStrokeCheck",  docMarkerId:"onset_wakeup_stroke"},
    { FormId: "wakeUpStrokeUnCheck", docMarkerId:"onset_wakeup_stroke"},

    { FormId: "wakeUpdate", docMarkerId:"onset_sleep_timestamp"},

    //Same field
    { FormId: "strokeCheck",  docMarkerId:"onset_inhospital_stroke"},
    { FormId: "strokeUnCheck", docMarkerId:"onset_inhospital_stroke"},

    { FormId: "firstAttented", docMarkerId:"admission_first_contact_place"},
    { FormId: "arrivalDate", docMarkerId:"admission_admission_timestamp"},
    { FormId: "arrivalTime", docMarkerId:"admission_admission_timestamp"},
    { FormId: "onsetDate", docMarkerId:"onset_onset_timestamp"},
    { FormId: "onsetTime", docMarkerId:"onset_onset_timestamp"},
    { FormId: "arrivedFrom", docMarkerId:"admission_arrival_mode"},
    { FormId: "hospitalizedIn",  docMarkerId:"admission_hospitalized_in"},
    { FormId: "department", docMarkerId:"admission_admission_department"},

    //Not in docmarker
    { FormId: "radioMedicalHistoryYes", docMarkerId:"anamnesis_risk_factors"},
    { FormId: "radioMedicalHistoryNone",  docMarkerId:"anamnesis_risk_factors"},
    { FormId: "radioMedicalHistoryUnknown",  docMarkerId:"anamnesis_risk_factors"},

    { FormId: "checkBoxMedicalHistoryHypertension", docMarkerId:"anamnesis_risk_factors_hypertension"},
    { FormId: "checkBoxMedicalHistorydiabetes",  docMarkerId:"anamnesis_risk_factors_diabetes"},
    { FormId: "checkBoxMedicalHistoryHyperlipidemia",  docMarkerId:"anamnesis_risk_factors_hyperlypidemia"},
    { FormId: "checkBoxMedicalHistoryActiveSmoker",  docMarkerId:"anamnesis_risk_factors_active_smoker"},
    { FormId: "checkBoxMedicalHistoryPreviousIschemic",  docMarkerId:"anamnesis_risk_factors_ischemic_stroke"},
    { FormId: "checkBoxMedicalHistoryPreviousHemorrhage",  docMarkerId:"anamnesis_risk_factors_hermorrhage_stroke"},
    { FormId: "checkBoxMedicalHistoryAtrialFibrillation",  docMarkerId:"anamnesis_risk_factors_atrial_fibrillation"},
    { FormId: "checkBoxMedicalHistoryCoronaryArtery",  docMarkerId:"anamnesis_risk_factors_coronary_artery"},
    { FormId: "checkBoxMedicalHistoryCongestiveHeartFailure",  docMarkerId:"anamnesis_risk_factors_heart_failure"},
    { FormId: "checkBoxMedicalHistoryHIV",  docMarkerId:"anamnesis_risk_factors_hiv"},
    { FormId: "checkBoxMedicalHistoryCOVIdPositive",  docMarkerId:"anamnesis_risk_factors_covid_positive"},

    //These rely on the same field
    { FormId: "radioTreatmentEventYes",  docMarkerId:"anamnesis_medication_any_medication"},
    { FormId: "radioTreatmentEventNone",  docMarkerId:"anamnesis_medication_any_medication"},
    { FormId: "radioTreatmentEventUnknown",  docMarkerId:"anamnesis_medication_any_medication"},

    { FormId: "checkBoxTreatmentEventAntidiabetics",  docMarkerId:"anamnesis_medication_antidiabetics"},
    { FormId: "checkBoxTreatmentEventAntihypertensives",  docMarkerId:"anamnesis_medication_antihypertensives"},

    { FormId: "checkBoxTreatmentEventAntiplatelets",  docMarkerId:"anamnesis_medication_antiplatelets"}, //More fields needed
    { FormId: "checkBoxTreatmentEventAnticoagulants",  docMarkerId:"anamnesis_medication_anticoagulants"}, // more fields needed

    { FormId: "checkBoxTreatmentEventHormonalContraception",  docMarkerId:"anamnesis_medication_hormonal_contraception"},
    { FormId: "checkBoxTreatmentEventStatin",  docMarkerId:"anamnesis_medication_statin"},
    { FormId: "glucose", docMarkerId:"admission_medical_examination_glucose"},
    { FormId: "cholesterol", docMarkerId:"admission_medical_examination_cholesterol"},
    { FormId: "systolic", docMarkerId:"admission_medical_examination_systolic_pressure"},
    { FormId: "diastolic", docMarkerId:"admission_medical_examination_diastolic_pressure"},
    { FormId: "nihss", docMarkerId:"admission_medical_examination_nihss"},

    { FormId: "mrs", docMarkerId:"anamnesis_medication_prestroke_mrs"},
    { FormId: "firstInrTesting", docMarkerId:"admission_medical_examination_inr_mode"},

    { FormId: "coma", docMarkerId:""},

    { FormId: "brainImaging", docMarkerId:"diagnosis_imaging_type"},
    { FormId: "imagingdate", docMarkerId:"diagnosis_imaging_timestamp"},
    { FormId: "imagingTime", docMarkerId:"diagnosis_imaging_timestamp"},

    //These use the same field!
    { FormId: "radioInfarctsYes",  docMarkerId:"diagnosis_imaging_old_infarcts_any_infarct"},
    { FormId: "radioInfarctsNo",  docMarkerId:"diagnosis_imaging_old_infarcts_any_infarct"},

    { FormId: "checkBoxInfarctsCortical",  docMarkerId:"diagnosis_imaging_old_infarcts_cortical"},
    { FormId: "checkBoxInfarctsSubCortical",  docMarkerId:"diagnosis_imaging_old_infarcts_subcortical"},
    { FormId: "checkBoxBrainstem",  docMarkerId:"diagnosis_imaging_old_infarcts_brainstem"},
    { FormId: "strokeType", docMarkerId:"diagnosis_stroke_type"},

    { FormId: "aspectScore", docMarkerId:""},
    { FormId: "radioArterialYes",  docMarkerId:""},
    { FormId: "radioArterialNo",  docMarkerId:""},

    { FormId: "checkBoxArterialMCA1Left",  docMarkerId:"diagnosis_imaging_occlusion_mca_m1_left"},
    { FormId: "checkBoxArterialMCA2Left",  docMarkerId:"diagnosis_imaging_occlusion_mca_m2_left"},
    { FormId: "checkBoxArterialMCA3Left",  docMarkerId:"diagnosis_imaging_occlusion_mca_m3_left"},
    { FormId: "checkBoxArterialACA",  docMarkerId:"diagnosis_imaging_occlusion_cerebral_artery_left"},
    { FormId: "checkBoxArterialPCA1Left",  docMarkerId:"diagnosis_imaging_occlusion_pca_p1_left"},
    { FormId: "checkBoxArterialPCA2Left",  docMarkerId:"diagnosis_imaging_occlusion_pca_p2_left"},
    { FormId: "checkBoxArterialCEALeft",  docMarkerId:"diagnosis_imaging_occlusion_artery_extracranial_left"},
    { FormId: "checkBoxArterialCIALeft",  docMarkerId:"diagnosis_imaging_occlusion_artery_intracranial_left"},
    { FormId: "checkBoxArterialVertebral",  docMarkerId:""},
    { FormId: "checkBoxArterialMCA1Right",  docMarkerId:"diagnosis_imaging_occlusion_mca_m1_right"},
    { FormId: "checkBoxArterialMCA2Right",  docMarkerId:"diagnosis_imaging_occlusion_mca_m2_right"},
    { FormId: "checkBoxArterialMCA3Right",  docMarkerId:"diagnosis_imaging_occlusion_mca_m3_right"},
    { FormId: "checkBoxArterialACARight",  docMarkerId:"diagnosis_imaging_occlusion_cerebral_artery_right"},
    { FormId: "checkBoxArterialPCA1Right",  docMarkerId:"diagnosis_imaging_occlusion_pca_p1_right"},
    { FormId: "checkBoxArterialPCA2Right",  docMarkerId:"diagnosis_imaging_occlusion_pca_p2_right"},
    { FormId: "checkBoxArterialCEARight",  docMarkerId:"diagnosis_imaging_occlusion_artery_extracranial_right"},
    { FormId: "checkBoxArterialCIARight",  docMarkerId:"diagnosis_imaging_occlusion_artery_intracranial_right"},
    { FormId: "checkBoxArterialBasilar",  docMarkerId:"diagnosis_imaging_occlusion_basilar_artery"},

    //These use the same field!!!!
    { FormId: "radioThrombolysisCheck",  docMarkerId:"treatment_thrombolysis_thrombolysis_treatment"},
    { FormId: "radioThrombolysisUnCheck", docMarkerId:"treatment_thrombolysis_thrombolysis_treatment"},

    //Not in Docmarker
    { FormId: "thrombolysisReason", docMarkerId:""},
    { FormId: "thrombolysisDate", docMarkerId:""},

    { FormId: "drugUsed", docMarkerId:"treatment_thrombolysis_drug"},

    //This is using the same field
    { FormId: "radioAnticoagulantYes",  docMarkerId:"treatment_thrombolysis_antidote_given"},
    { FormId: "radioAnticoagulantNo",  docMarkerId:"treatment_thrombolysis_antidote_given"},

    { FormId: "treatmentDose", docMarkerId:"treatment_thrombolysis_drug_dos"},
    { FormId: "bolusDate", docMarkerId:"treatment_thrombolysis_bolus_timestamp"},

    //same field
    { FormId: "thrombolysisGiven", docMarkerId:"treatment_ischemic_stroke_thrombectomy_treatment"},
    { FormId: "thrombectomyCheck",  docMarkerId:"treatment_ischemic_stroke_thrombectomy_treatment"},
    { FormId: "thrombectomyUnCheck", docMarkerId:"treatment_ischemic_stroke_thrombectomy_treatment"},

    //Not found
    { FormId: "thrombectomyReason", docMarkerId:""},
    { FormId: "thrombectomyDate", docMarkerId:""},

    { FormId: "groinDate", docMarkerId:"treatment_ischemic_stroke_puncture_timestamp"},
    { FormId: "mTICIScore", docMarkerId:"treatment_ischemic_stroke_mtici_score"},
    { FormId: "reperfusionDate", docMarkerId:"treatment_ischemic_stroke_reperfusion_timestamp"},

    //Same field
    { FormId: "radioThrombectomyYes",  docMarkerId:"treatment_ischemic_stroke_mt_complications_any_thrombectomy_complication"},
    { FormId: "radioThrombectomyNo",  docMarkerId:"treatment_ischemic_stroke_mt_complications_any_thrombectomy_complication"},

    { FormId: "checkBoxThrombectomyVesselPerforation",  docMarkerId:"treatment_ischemic_stroke_mt_complications_perforation"},
    { FormId: "checkBoxThrombectomyDissection",  docMarkerId:"treatment_ischemic_stroke_mt_complications_dissection"},
    { FormId: "checkBoxThrombectomyEmbolization",  docMarkerId:"treatment_ischemic_stroke_mt_complications_embolization"},
    { FormId: "checkBoxThrombectomyHematoma",  docMarkerId:"treatment_ischemic_stroke_mt_complications_hematoma"},
    { FormId: "checkBoxThrombectomyOther",  docMarkerId:"treatment_ischemic_stroke_mt_complications_other"},
    { FormId: "bleedingVolume", docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_volume"},

    { FormId: "infratentorialCheck",  docMarkerId:""},
    { FormId: "infratentorialUnCheck", docMarkerId:""},
    { FormId: "bleedingCheck",  docMarkerId:""},
    { FormId: "bleedingUnCheck", docMarkerId:""},
    { FormId: "intraventricularCheck",  docMarkerId:""},
    { FormId: "intraventricularUnCheck", docMarkerId:""},

    //using the same field
    { FormId: "radioBleedingReasonYes",  docMarkerId:"treatment_bleeding_source_found"},
    { FormId: "radioBleedingReasonNo",  docMarkerId:"treatment_bleeding_source_found"},

    { FormId: "checkBoxBleedingReasonArterialHypertension",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_hypertension"},
    { FormId: "checkBoxBleedingReasonAneurysm",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_aneurysm"},
    { FormId: "checkBoxBleedingReasonArteriovenousMalformation",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_malformation"},
    { FormId: "checkBoxBleedingReasonAnticoagulationTherapy",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_anticolagulant"},
    { FormId: "checkBoxBleedingReasonAmyloidAngiopathy",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_angiopathy"},
    { FormId: "checkBoxBleedingReasonOther",  docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_reason_other"},
    { FormId: "antidoteAnticoagulants", docMarkerId:"treatment_intracerebral_hemorrhage_bleeding_antidote"},

    //Using same field
    { FormId: "radioNeurosurgeryYes",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_any_treatment"},
    { FormId: "radioNeurosurgeryNo",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_any_treatment"},

    { FormId: "checkBoxNeurosurgeryIntracranialHematomaEvacuation",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_hematoma_evacuation"},
    { FormId: "checkBoxNeurosurgeryExternalVentriculardrainage",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_ventricular_drainage"},
    { FormId: "checkBoxNeurosurgerydecompresiveCraniectomy",  docMarkerId:"treatment_intracerebral_hemorrhage_treatment_craniectomy"},

    { FormId: "clinicalSymptoms", docMarkerId:""},
    { FormId: "symptomsduration", docMarkerId:""},

    //using same filed
    { FormId: "bleedingSubarachnoidCheck",  docMarkerId:"treatment_subarachnoid_hemorrhage_treatment"},
    { FormId: "bleedingSubarachnoidUnCheck", docMarkerId:"treatment_subarachnoid_hemorrhage_treatment"},

    //Don't have this fields in our JSON
    { FormId: "huntHess", docMarkerId:""},
    { FormId: "radioInterventionYes",  docMarkerId:""},
    { FormId: "radioInterventionNo",  docMarkerId:""},
    { FormId: "checkBoxInterventionEndovascular",  docMarkerId:""},
    { FormId: "checkBoxInterventionNeurosurgical",  docMarkerId:""},
    { FormId: "checkBoxInterventionVentricularDrainage",  docMarkerId:""},
    { FormId: "checkBoxInterventionDecompressiveCraniectomy",  docMarkerId:""},
    { FormId: "checkBoxInterventionOther",  docMarkerId:""},
    { FormId: "nimodipineTreatment", docMarkerId:""},
    { FormId: "radioTreatmentPerformedYes",  docMarkerId:""},
    { FormId: "radioTreatmentPerformedNo",  docMarkerId:""},
    { FormId: "checkBoxTreatmentPerformedAnticoagulation",  docMarkerId:""},
    { FormId: "checkBoxTreatmentPerformedThrombectomy",  docMarkerId:""},
    { FormId: "checkBoxTreatmentPerformedThrombolysis",  docMarkerId:""},
    { FormId: "checkBoxTreatmentPerformedNeurosurgical",  docMarkerId:""},

    { FormId: "radioThrombolysisMimicCheck",  docMarkerId:"treatment_thrombolysis_thrombolysis_treatment"},
    { FormId: "radioThrombolysisMimicUnCheck", docMarkerId:"treatment_thrombolysis_thrombolysis_treatment"},

    { FormId: "drugUsedThrombolysis", docMarkerId:"treatment_thrombolysis_drug"},
    { FormId: "radioAnticoagulantMimicsYes",  docMarkerId:"treatment_thrombolysis_antidote_given"},
    { FormId: "radioAnticoagulantMimicsNo",  docMarkerId:"treatment_thrombolysis_antidote_given"},
    { FormId: "treatmentDoseMimics", docMarkerId:"treatment_thrombolysis_drug_dos"},
    { FormId: "bolusMimicDate", docMarkerId:"treatment_thrombolysis_bolus_timestamp"},

    { FormId: "finalDiagnosis", docMarkerId:""},

    { FormId: "ctmrPerfusion", docMarkerId:"diagnosis_imaging_perfusion_perfusion_deficit"},
    { FormId: "coreVolume", docMarkerId:""},
    { FormId: "hypoperfusionVolume", docMarkerId:""},

    { FormId: "dischargeDestination", docMarkerId:"discharge_destination_discharge_destination"},

    //not found
    { FormId: "dischargeDestinationFacility", docMarkerId:""},
    { FormId: "dischargeFacility", docMarkerId:""},

    { FormId: "dischargeDate", docMarkerId:"discharge_discharge_date"},
    { FormId: "mrsScore", docMarkerId:"discharge_mrs_score"},

    //not found
    { FormId: "discharge", docMarkerId:""},
    { FormId: "radioTreatmentPrescribedYes",  docMarkerId:"discharge_any_treatment_prescribed"},
    { FormId: "radioTreatmentPrescribedNo",  docMarkerId:"discharge_any_treatment_prescribed"},

    { FormId: "checkBoxTreatmentPrescribedAntidiabetics",  docMarkerId:"discharge_medication_antidiabetics"},
    { FormId: "checkBoxTreatmentPrescribedAntihypertensives",  docMarkerId:"discharge_medication_antihypertensives"},
    { FormId: "checkBoxTreatmentPrescribedAntiplatelets",  docMarkerId:"discharge_medication_antiplatelets"},
    { FormId: "checkBoxTreatmentPrescribedAnticoagulants",  docMarkerId:"discharge_medication_anticoagulants"},
    { FormId: "checkBoxTreatmentPrescribedAnticoagulantPlanned",  docMarkerId:"discharge_medication_anticoagulant_recommended"},
    { FormId: "checkBoxTreatmentPrescribedStatin",  docMarkerId:"discharge_medication_statin"},
    { FormId: "checkBoxTreatmentPrescribedOther",  docMarkerId:"discharge_medication_other"},
    { FormId: "appointmentScheduled", docMarkerId:"discharge_stroke_management_appointment"},
    { FormId: "smokingCessation", docMarkerId:"discharge_smoking_cessation_recommended"},
    { FormId: "hospitalised24Hour", docMarkerId:"discharge_24_hour_hospitalized_time"},

    //These use the same field
    { FormId: "radioVentilated", docMarkerId:"post_acute_care_patient_ventilated"},
    { FormId: "radioVentilatedYes", docMarkerId:"post_acute_care_patient_ventilated"},
    { FormId: "radioVentilatedNo", docMarkerId:"post_acute_care_patient_ventilated"},

    //These use the same field
    { FormId: "radioCraniectomy", docMarkerId:"post_acute_care_craniectomy"},
    { FormId: "radioCraniectomyYes", docMarkerId:"post_acute_care_craniectomy"},
    { FormId: "radioCraniectomyNo", docMarkerId:"post_acute_care_craniectomy"},

    //These use the same field
    { FormId: "radiothromboembolismYes",  docMarkerId:"post_acute_care_any_vte"},
    { FormId: "radiothromboembolismNo",  docMarkerId:"post_acute_care_any_vte"},

    { FormId: "checkBoxthromboembolismUFH", docMarkerId:"post_acute_care_any_vte_ufh"},
    { FormId: "checkBoxthromboembolismLMWH", docMarkerId:"post_acute_care_any_vte_lmwh"},
    { FormId: "checkBoxthromboembolismIPC", docMarkerId:"post_acute_care_any_vte_ipc"},
    { FormId: "checkBoxthromboembolismGCS", docMarkerId:"post_acute_care_any_vte_gcs"},
    { FormId: "checkBoxthromboembolismVTE", docMarkerId:"post_acute_care_any_vte_warfarin"},
    { FormId: "checkBoxthromboembolismVFP", docMarkerId:"post_acute_care_any_vte_vfp"},
    { FormId: "checkBoxthromboembolismXaVTE", docMarkerId:"post_acute_care_any_vte_xa_inhibitor"},
    { FormId: "checkBoxthromboembolismOther", docMarkerId:"post_acute_care_any_vte_other"},

    //These use the same field
    { FormId: "radioStrokeCompYes",  docMarkerId:"post_acute_care_post_stroke_complications_any_post_stroke_complication"},
    { FormId: "radioStrokeCompNo",  docMarkerId:"post_acute_care_post_stroke_complications_any_post_stroke_complication"},
    { FormId: "radioStrokeCompUnknown",  docMarkerId:"post_acute_care_post_stroke_complications_any_post_stroke_complication"},

    { FormId: "checkBoxStrokeCompPneumonia", docMarkerId:"post_acute_care_post_stroke_complications_pneumonia"},
    { FormId: "checkBoxStrokeCompdVT", docMarkerId:"post_acute_care_post_stroke_complications_dvt"},
    { FormId: "checkBoxStrokeCompPulmonary", docMarkerId:"post_acute_care_post_stroke_complications_pulmonary_embolism"},
    { FormId: "checkBoxStrokeCompUrinary", docMarkerId:"post_acute_care_post_stroke_complications_urinary_infection"},
    { FormId: "checkBoxStrokeCompSores", docMarkerId:"post_acute_care_post_stroke_complications_pressure_sores"},
    { FormId: "checkBoxStrokeCompSepsis", docMarkerId:"post_acute_care_post_stroke_complications_drip_site_sepsis"},
    { FormId: "checkBoxStrokeCompRecurrence", docMarkerId:"post_acute_care_post_stroke_complications_recurrence_or_extension"},
    { FormId: "checkBoxStrokeCompOther", docMarkerId:"post_acute_care_post_stroke_complications_other"},
]