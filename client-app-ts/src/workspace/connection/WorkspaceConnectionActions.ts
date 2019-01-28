import { WorkspaceConnection } from "./WorkspaceConnection";
import { IWorkspaceFileContent } from "../model/IWorkspaceState";

export const startWorkspaceConnection = () => WorkspaceConnection.start();
export const stopWorkspaceConnection = () => WorkspaceConnection.stop();
export const getWorkspaceList = () => WorkspaceConnection.getWorkspaceList();
export const getWorkspaceEditorExplorer = (workspace: string) =>
    WorkspaceConnection.getWorkspaceEditorExplorer(workspace);
export const getWorkspaceFileContent = (
    workspace: string,
    folders: string[],
    fileName: string
) => WorkspaceConnection.getWorkspaceFileContent(workspace, folders, fileName);
export const saveWorkspacePendingFileContent = (
    fileContent: IWorkspaceFileContent
) => WorkspaceConnection.saveWorkspacePendingFileContent(fileContent);