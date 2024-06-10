package com.habittracker.habit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HabitValidator {

    private static final Logger LOGGER = LoggerFactory.getLogger(HabitValidator.class);

    // Mensajes de ERROR
    private static final String NAME_ERROR = "Debe ingresar el nombre del hábito";
    private static final String DESCRIPTION_ERROR = "Debe ingresar una descripción sobre el hábito";
    private static final String TYPE_ERROR = "Debe ingresar el tipo de hábito";
    private static final String LEVEL_PRIORITY_ERROR = "Debe ingresar un rango de prioridad al hábito";
    private static final String DATE_ERROR = "Debe ingresar una fecha para el hábito";

    // Métodos para comprobar si todos los campos del hábito han sido rellenados
    public static void validate(Habit habit) {
        validateField(habit.getName(), NAME_ERROR);
        validateField(habit.getDescription(), DESCRIPTION_ERROR);
        validateField(habit.getType(), TYPE_ERROR);
        validateField(habit.getLevel_priority(), LEVEL_PRIORITY_ERROR);
        validateField(habit.getNameDay(), DATE_ERROR);
    }

    private static void validateField(Object field, String errorMessage) {
        if (field == null || (field instanceof String && ((String) field).trim().isEmpty())) {
            LOGGER.warn(errorMessage);
            throw new IllegalArgumentException(errorMessage);
        }
    }
}
