import * as core from '@actions/core'
import * as github from '@actions/github'
import { readFile } from 'fs/promises'

try {
    // Get file name
    const fileName = core.getInput("file")
    const directory = core.getInput("directory")

    const json = JSON.parse(
        await readFile(
            new URL(`${directory}/${fileName}`, import.meta.url)
        )
    );

    if (json.hasOwnProperty("version")) {
        core.setOutput("version", json.version);
    }

    const payload = JSON.stringify(github.context.payload, undefined, 2);
    core.info(`Event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}