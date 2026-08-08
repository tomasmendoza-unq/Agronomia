package com.agro.shared.dtos.table;

import org.springframework.data.domain.Page;
import java.util.List;
import java.util.function.Function;

public record TableResponseDTO<T>(
        List<ColumnHeader> columns,
        List<Row<T>> rows,
        int page,
        int size,
        long totalElements,
        int totalPages,
        boolean last
) {
    public record ColumnHeader(String key, String header) {}

    public record Row<T>(Long id, T data) {}

    public static <T> TableResponseDTO<T> fromPage(
            List<ColumnHeader> columns,
            Page<T> page,
            Function<T, Long> idExtractor
    ) {
        return new TableResponseDTO<>(
                columns,
                page.getContent().stream()
                        .map(item -> new Row<>(idExtractor.apply(item), item))
                        .toList(),
                page.getNumber(),
                page.getSize(),
                page.getTotalElements(),
                page.getTotalPages(),
                page.isLast()
        );
    }
}