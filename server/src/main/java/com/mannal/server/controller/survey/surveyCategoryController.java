package com.mannal.server.controller.survey;

import com.mannal.server.entity.survey.SurveyCategory;
import com.mannal.server.service.survey.SurveyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/survey/category")
public class surveyCategoryController {

    private final SurveyService surveyService;

    public surveyCategoryController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @GetMapping
    public ResponseEntity<List<SurveyCategory>> list(){
        return ResponseEntity.ok(surveyService.getAllSurveys());
    }
}
