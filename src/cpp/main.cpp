#include <stdio.h>

extern "C" {
    int readFile(char* path) {
        FILE* f = fopen(path, "r");
        if (f) {
            char buffer[1024];
            int read = fread(buffer, sizeof(char), 1024, f);
            fclose(f);
            return read;
        }
        return -1;
    }
}