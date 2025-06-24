# pkg-ver
Get version tag inside of package.json

## Inputs

### `file`

Name of file you want to read from. Defaults to package.json

### `directory`

Path of directory. Recommend to use ``${{ github.workspace }}``.

## Outputs

### `version`

The version inside the read file.

## Example Usage

```yml
- name: Get version from package.json
    uses: actions/pkg-ver@v1.0.0
```